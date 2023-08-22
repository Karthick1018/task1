import React from "react";

const Style = () => {
    const karthi = [
        { num: 1, name: 'ram' },
        { num: 2, name: 'sai' },
        { num: 3, name: 'bai' },
        { num: 4, name: 'sri' },
        { num: 5, name: 'sam' }
    ];
    const listings = [
        {
            id: 1,
            description: "heater",

        },
        {
            "id": 2,
            "description": "2019 Toyota Tacoma grill",

        },
        {
            "id": 4,
            "description": "FREE Hundreds of DVD/CD Cases - Different Sizes and Colors",

        },
        {
            "id": 5,
            "description": "wood",

        },
        {
            "id": 6,
            "description": "Beautiful couch",

        },
        {
            "id": 7,
            "description": "Treadmill Parts For Free",

        }
    ]
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <span class="navbar-brand">Navbar</span>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item nav-link active" aria-current="page">Home
                            </li>
                            <li class="nav-item nav-link">Link
                            </li>
                            <li class="nav-item dropdown nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                                <ul class="dropdown-menu">
                                    <li>Action</li>
                                    <li>Another action</li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li>Something else here</li>
                                </ul>
                            </li>
                            <li class="nav-link disabled nav-item">
                                Disabled
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className="bird">
                <h1>Bird</h1>
                <img src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcT7p48zgkqUyYDdx7AGnlWVOEh6vpc8QHHPh0mAtn_73_jD_etGCyAexD1ArARBsGl4HqZYyGjcpRJRo3A" alt=".." height="100px" weight="100px" />
            </div>
            <div className="Welcome">
                <p>Hello</p>
            </div>
            <div className="map">
                {karthi.map((w) => {
                    return (
                        <div>{w.num}. {w.name}</div>
                    )
                })}



            </div>
            <br/>

            <div className="Maping">
                <h1>List</h1>
                {listings.map((q) => {
                    return (
                        <div>{q.id}.{q.description}</div>
                    )
                })}
            </div>
      <form  action="/action_page.php">      
 <fieldset>
  <legend>Personalia:</legend>
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"/><br/><br/>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"/><br/><br/>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email"/><br/><br/>
  <label for="birthday">Birthday:</label>
  <input type="date" id="birthday" name="birthday"/><br/><br/>
  <input type="submit" value="Submit"/>
 </fieldset>
 </form>


 <fieldset>
     <legend>name</legend>
 </fieldset>

        </>
    )
}
export default Style




