import React, {useState} from "react";

function User () {
    const [user, setUser] = useState({ name:"Merve" , surname:"Barış"});


    return (
      <div>
        <h2>User</h2>
        {user.name} {user.surname}
        <br />
        <br />
        <div>
          <button onClick={() => setUser({ ...user, name: "Volkan" })}>
            İsmi Değiştir
          </button>
          <button onClick={() => setUser({ ...user, surname: "Sitti" })}>
            Soyisim Değiştir
          </button>
        </div>
      </div>
    );

}

export default User;