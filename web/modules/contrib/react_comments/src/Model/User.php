<?php

namespace Drupal\react_comments\Model;

use Drupal\Console\Bootstrap\Drupal;
use Drupal\Core\Session\AccountInterface;
use Drupal\image\Entity\ImageStyle;
use Drupal\user\Entity\User as DrupalUser;

class User extends UserBase {

  public function __construct(AccountInterface $user = NULL) {
    if ($user) {
      $this->load($user);
    }
  }

  public function load(AccountInterface $user = NULL) {
    $user = $user ?: DrupalUser::load($this->getId());

    if ($user) {
      // load the full user entity so we can access the user picture field
      $user = DrupalUser::load($user->id());

      $user_picture = null;

      if (isset($user->user_picture) && !$user->user_picture->isEmpty()) {
        $user_avatar_image_style = \Drupal::config('react_comments.settings')->get('user_avatar_image_style') ?: 'thumbnail';
        $uri = $user->user_picture->entity->uri->value;
        $user_picture = ImageStyle::load($user_avatar_image_style)->buildUrl($uri);
      }

      $this
        ->setId($user->id())
        ->setName($user->id() ? $user->getDisplayName() : null)
        ->setEmail($user->getEmail())
        ->setThumbnail($user_picture)
        ->setPermissions($this->loadPermissions($user));
    }
  }

  private function loadPermissions(AccountInterface $user) {
    $permissions = [
      'administer comments',
      'administer comment types',
      'access comments',
      'post comments',
      'skip comment approval',
      'edit own comments'
    ];
    foreach ($permissions as $key => $permission) {
      if (!$user->hasPermission($permission)) {
        unset($permissions[$key]);
      }
    }
    return $permissions;
  }
}
