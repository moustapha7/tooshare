<?php

namespace App\Notifications;

use App\User;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class FriendSheapNotification extends Notification
{
    use Queueable;

    private $user;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(User $user)
    {
        //
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
                     ->subject('Demande Damis')
                    ->line('lutilisateur'.$this->user->first_name.' '.$this->user->last_name.'Vous a envoyer une demande Damis')
                    ->action('Accepter demande', url('/'))
                    ->line('Thank you for using our application!');

    }
    public function toDatabase($notifiable)
    {
        return [
            'user'=>$this->user
        ];
    }
    public function toBroadcast($notifiable)
    {
        return [
            'data'=>[
                "user"=>$this->user
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
            //
        ];
    }
}
