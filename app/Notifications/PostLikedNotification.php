<?php

namespace App\Notifications;

use App\Post;
use App\User;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class PostLikedNotification extends Notification
{
    use Queueable;
    /**
     * @var Post
     */
    private $post;
    /**
     * @var User
     */
    private $user;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(Post $post,User $user)
    {
        //
        $this->post = $post;
        $this->user = $user;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail','database','broadcast'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                     ->subject('Notification dun post ')
                    ->line('.Bonjour Mr '.$this->post->user->first_name.' '.$this->post->user->last_name.' votre post '.$this->post->content.' poster il ya de cela'.$this->post->created_at->diffForHumans().' viens detre aime par cette utilisateur '.$this->user->first_name.' '.$this->user->last_name)
                    ->action('aller voir ', url('/'))
                    ->line('Thank you for using our application!');
    }

    /**
     * @param $notifiable
     * @return array
     */
    public function toDatabase($notifiable)
    {
        return [
            'user'=>$this->user,
            'post'=>$this->post
        ];
    }

    /**
     * @param $notifiable
     * @return array
     */
    public function toBroadcast($notifiable)
    {
        return [
            'data'=>[
                "user"=>$this->user,
                'post'=>$this->post
            ]

        ];
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            'data'=>[
                "user"=>$this->user,
                'post'=>$this->post
            ]
        ];
    }
}
