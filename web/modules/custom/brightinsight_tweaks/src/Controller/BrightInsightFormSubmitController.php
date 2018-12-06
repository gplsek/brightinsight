<?php

/**
 * @file
* Contains \Drupal\brightinsight_tweaks\Controller\BrightInsightFormSubmitController.
 */

namespace Drupal\brightinsight_tweaks\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Ajax\AjaxResponse;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Drupal\Component\Serialization\Json;
use Drupal\Component\Utility\Unicode;
use Drupal\webform\Entity\Webform;
use Drupal;



/**
 * sends form inquries to HubSpot FormAPI
 */
class BrightInsightFormSubmitController extends ControllerBase {
	
	
	public function formSubmission(Request $request){
		
		\Drupal::logger('brightinsight')->notice('got submisions');
		
		// This condition checks the `Content-type` and makes sure to 
		// decode JSON string from the request body into array.
		    if ( 0 === strpos( $request->headers->get( 'Content-Type' ), 'application/json' ) ) {
		      $data = json_decode( $request->getContent(), TRUE );
		      $request->request->replace( is_array( $data ) ? $data : [] );
              
		        \Drupal::logger('brightinsight')->notice('test result <pre>' . print_r( $data, true) . '</pre>');   
				$firstname = $data['name'];  //first name
				$lastname = $data['last_name'];
                $company = $data['company'];
				$email = $data['email'];
                $message = $data['message'];
				$interests = implode(';',$data['interested_in_']);
                $role = $data['role'];
                $ip_addr = $data['remote_addr'];
                $cur_page = $data['current_page'];
                
                $fields = array();
                $fields[] = array(
                    'name' => 'firstname',
                    'value' => $firstname
                );
                $fields[] = array(
                    'name' => 'lastname',
                    'value' => $lastname
                );
                $fields[] = array(
                    'name' => 'company',
                    'value' => $company
                );
                $fields[] = array(
                    'name' => 'email',
                    'value' => $email
                );
                $fields[] = array(
                    'name' => 'message',
                    'value' => $message
                );
                $fields[] = array(
                    'name' => 'interests',
                    'value' => $interests
                );
                $fields[] = array(
                    'name' => 'job_function',
                    'value' => $role
                );
                
                $hubspotutk      = '3aea3ab5985f7bc544e847d1f76b5857'; //grab the cookie from the visitors browser.
                $hs_context      = array(
                    'hutk' => $hubspotutk,
                    'ipAddress' => $ip_addr,
                    'pageUri' => 'http://www.brightinsights.com/contact-us',
                    'pageName' => $cur_page,
                    'sfdcCampaignId' => '70150000000T85uAAC'
                );
                
               $data = array(
                    'fields' => $fields,
                   // 'context' => $hs_context,
                    'skipValidation' => 'false'
                );
                
                
                 $payload = json_encode($data);

                 \Drupal::logger('brightinsight')->notice('payload <pre>' . print_r( $payload, true) . '</pre>'); 

                //replace the values in this URL with your portal ID and your form GUID
                $endpoint = 'https://api.hsforms.com/submissions/v3/integration/submit/5104118/e1d3adaf-b4da-4d23-8704-9297fb7067ce';
                
				$client = \Drupal::httpClient();
                
       		     try {
            	     $request = $client->post($endpoint, array(
                         'headers' => array(
                              'Accept' => 'application/json',
                              'Content-type' => 'application/json'
                          ),
                          'body' => $payload
                     ));
       			     
                     $code = $request->getStatusCode();

                     if($code == 200){
               	      $body = json_decode($request->getBody()->getContents());
                      \Drupal::logger('brightinsight')->notice('Form Saved to HS for '.$firstname.' '.$lastname.' '.$body->inlineMessage);  
       			     }

       		      }catch(RequestException $e){
       			     watchdog_exception('brightinsight', $e->getMessage());
       		      } 
				
                  return new Response('added');
        
       }
       return new Response('empty');
	}
	
	public function formTest(){
                 
         $form = array(
             'firstname' => 'Jiri',
             'lastname' => 'Some',
             'company' => 'Self',
             'email' => 'testsome@plsek.us',
             'message' => 'some message',
             'interests' => 'pharma;medtech',
             'job_function' => 'it',
         );
         
         $fields = array();
         $fields[] = array(
             'name' => 'firstname',
             'value' => $form['firstname']
         );
         $fields[] = array(
             'name' => 'lastname',
             'value' => $form['lastname']
         );
         $fields[] = array(
             'name' => 'company',
             'value' => $form['company']
         );
         $fields[] = array(
             'name' => 'email',
             'value' => $form['email']
         );
         $fields[] = array(
             'name' => 'message',
             'value' => $form['message']
         );
         $fields[] = array(
             'name' => 'interests',
             'value' => $form['interests']
         );
         $fields[] = array(
             'name' => 'job_function',
             'value' => $form['job_function']
         );
         
         //print_r($fields);die();
         
         $hubspotutk      = '3aea3ab5985f7bc544e847d1f76b5857'; //grab the cookie from the visitors browser.
         $ip_addr         = $_SERVER['REMOTE_ADDR']; //IP address too.
         $hs_context      = array(
             'hutk' => $hubspotutk,
             'ipAddress' => $ip_addr,
             'pageUri' => 'http://www.brightinsights.com/contact-us',
             'pageName' => 'contact us',
             'sfdcCampaignId' => '70150000000T85uAAC'
         );
         
        $data = array(
             'fields' => $fields,
             'context' => $hs_context,
             'skipValidation' => 'false'
         );
         
         
         $payload = json_encode($data);
         

         // return new Response($payload);
         
         // \Drupal::logger('brightinsight')->notice('payload <pre>' . print_r( $payload, true) . '</pre>'); 
         
         //replace the values in this URL with your portal ID and your form GUID
         $endpoint = 'https://api.hsforms.com/submissions/v3/integration/submit/5104118/e1d3adaf-b4da-4d23-8704-9297fb7067ce/';
         
         $client = \Drupal::httpClient();
         
	     $request = $client->post($endpoint, array(
             'headers' => array(
                  'Accept' => 'application/json',
                  'Content-type' => 'application/json'
              ),
              'body' => $payload
         ));
         //$request->setBody($payload); 
        //$response = $request->send($request);
        $code = $request->getStatusCode();  
        if($code == 200){
	      $body = json_decode($request->getBody()->getContents());
          \Drupal::logger('brightinsight')->notice('Form Saved to HS for '.$form['fiestname'].' '.$form['lastname'].' '.$body->inlineMessage); 
        }
         
         return new Response('added');
         
        

     }
    
}