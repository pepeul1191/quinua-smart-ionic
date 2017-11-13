# Quinua Smart IONIC

Configurar el PATH:

    $ sudo pluma ~/.bashrc

    JAVA_HOME="/usr/lib/jvm/java-8-oracle/"
    export JAVA_HOME
    PATH=$PATH:$JAVA_HOME
    export PATH

    export ANDROID_HOME=/home/ulima/Android/Sdk

    $ . ~/.bashrc

Extensión para debugear con chrome:

    Inspect Devices (ofrecido por Juan Carlos De Román)
    
Instalar las dependencias:

    $ npm install

Añadir plataforma Android y IOS

    $ ionic cordova platform add android
    $ ionic cordova platform add ios

Arrancar aplicación en Android

    $ ionic cordova run android
    $ ionic cordova emulate android -l -c

Generar resources:

    $ ionic cordova resources android

Generar Page:

    $ ionic generate page <nombre_page>

Generar Provider:

    $ ionic generate provider <nombre_provider>
