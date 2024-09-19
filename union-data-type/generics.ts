function studentId <x> (stId:x){
     console.log(`student ${stId}`);
}

studentId("45")
studentId(240)


function hostel <x, y> (room:x, roomNo:y){
    console.log(`room name ${room} ${roomNo}`);
}

hostel("vlo room", 34)

  const hostel1  = <x, y, t> (room:x, roomNo:y, service:t) => {
    console.log(`room name ${room} ${roomNo}`);
}

hostel1("vlo room", 34, "vlo na")