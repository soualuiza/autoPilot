let infernus;



//infernus
RegisterCommand('auto', async()=>{

  
        //Spawna Infernus
    let carroModelo = 'infernus';
    await carregarModelo(carroModelo);
    const  ped = PlayerPedId();

    let [x,y,z] = GetEntityCoords(ped, true);

      infernus = CreateVehicle(carroModelo, x,y,z, 0, false, false);

      //Piloto Automático 
    const blip = GetFirstBlipInfoId(8);
    let [a,b,c] = GetEntityCoords(blip);  
  
    TaskVehicleDriveToCoordLongrange(ped, infernus, a,b,c, 50, 55, 5 );
});


//Cancelar Ação
RegisterCommand('parar', ()=> { 
    player = PlayerPedId();
    ClearPedTasksImmediately(player);
})

//KeyMappings
RegisterKeyMapping('parar', 'para', 'keyboard', 'x');
RegisterKeyMapping('auto', 'Spawn Infernus', 'keyboard', 'z');

