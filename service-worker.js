self.addEventListener('notificationclick', function(event){
    event.notification.close();
    if(!event.action){
        // pengguna menyentuh area notifikasi diluar action
        console.log('notification click.');
        return;
    }

    switch (event.action) {
        case 'yes-action' :
            console.log("pengguna memilih action yes.");
            // buka tab baru 
            clients.openWindow('https://google.com');
            break;
        case 'no-action' :
            console.log("pengguna memilih action no");
            break;
        default :
            console.log(`action yang dipilih tidak dikenal: '${event.action}'`);
            break;
    }
})
