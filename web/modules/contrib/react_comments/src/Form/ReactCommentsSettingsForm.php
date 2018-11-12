<?php

namespace Drupal\react_comments\Form;

use Drupal\Core\Cache\Cache;
use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\image\Entity\ImageStyle;

class ReactCommentsSettingsForm extends ConfigFormBase  {

  public function getFormId() {
    return 'react_comments_settings';
  }

  public function getEditableConfigNames() {
    return [
      'react_comments.settings',
    ];
  }

  public function buildForm(array $form, FormStateInterface $form_state) {

    $form['allowed_tags'] = [
      '#type' => 'textfield',
      '#title' => 'Allowed HTML Tags',
      '#description' => 'A list of html tags that will be allowed in comments.',
      '#default_value' => $this->config('react_comments.settings')->get('allowed_tags') ?: '<a><b><em><strong><i><p>'
    ];

    $image_styles = array_map(function($el) {
      return $el->get('label');
    }, ImageStyle::loadMultiple());

    $form['user_avatar_image_style'] = [
      '#type' => 'select',
      '#title' => 'User Avatar Image Style',
      '#description' => "Choose the image style that will get applied to your user avatars. We recommend creating an image style with scale and crop 100 x 100 if you don't already have one",
      '#options' => $image_styles,
      '#default_value' => $this->config('react_comments.settings')->get('user_avatar_image_style') ?: 'thumbnail'
    ];

    $form['prefer_gravatar'] = [
      '#type' => 'checkbox',
      '#title' => 'Prefer Gravatar',
      '#description' => 'If this box is checked react comments will show gravatar images even if the comment was created by a drupal user with a user picture',
      '#default_value' => $this->config('react_comments.settings')->get('prefer_gravatar')
    ];

    return parent::buildForm($form, $form_state);
  }

  public function submitForm(array &$form, FormStateInterface $form_state) {
    $config = $this->config('react_comments.settings');

    $config_keys = [
      'allowed_tags',
      'prefer_gravatar',
      'user_avatar_image_style'
    ];

    foreach ($config_keys as $config_key) {
      $config->set($config_key, $form_state->getValue($config_key));
    }

    $config->save();

    // Most of these configs change the way comments are displayed in some way... Unfortunately we gotta clear those caches.
    Cache::invalidateTags(['react_comment_list']);

    parent::submitForm($form, $form_state);
  }
}