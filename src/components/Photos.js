import React from 'react'

function Photos() {

  return (
    <section aria-label="photos">
      <div className="row5">
        <div className="col-lg-6">
          <img className="center_img"
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
            alt="pancake" data-aos="fade-up-right"/>
        </div>
        <div className="col-lg-6">
          <img className="hobby_img"
            src="https://images.unsplash.com/photo-1495231916356-a86217efff12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZsb3dlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="flowers" data-aos="zoom-in-up" />
          <img className="hobby_img"
            src="https://images.unsplash.com/photo-1592038832701-ab9ecdf603bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFja3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="itchy" data-aos="zoom-in-up" />
          <img className="hobby_img"
            src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80"
            alt="books" data-aos="zoom-in-up" />
          <img className="hobby_img"
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdlaWdodHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="deadlifts" data-aos="zoom-in-up" />
        </div>
      </div>
  </section>
  )
}

export default Photos;