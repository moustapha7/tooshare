@component('mail::message')
#Confirmation de Compte

<p>Bonjour {{$user->last_name}} Vous venez de creer un compte avec cette adresse email {{$user->email}}
    Veillez confirmer votre Compte en cliquant sur ce lien </p>

@component('mail::button', ['url' => $url])
Confirmer votre Compte
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
