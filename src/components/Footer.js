import React from "react";

function Footer() {
  return (
    <div className="p-2 m-0">
      {" "}
      <footer class="bg-darka m-0 text-center text-white">
        <div class="container pb-0">
          <section class="py-md-4 py-3">
            <a
              class="btn btn-floating mbut mx-md-2 mx-1"
              href="https://www.facebook.com/100064630193313/"
              role="button"
            >
              <i class="fab fa-facebook-f"></i>
            </a>

            <a
              class="btn btn-floating mx-1 mbut mx-md-2 "
              href="https://www.instagram.com/ahmdzulfiqr"
              role="button"
            >
              <i class="fab fa-instagram"></i>
            </a>

            <a
              class="btn  btn-floating mx-1 mbut mx-md-2"
              href="https://www.linkedin.com/in/ahmed-zulfiqar124"
              role="button"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>

            <a
              class="btn  btn-floating mx-1 mbut mx-md-2"
              href="https://github.com/ahmedzulfiqar"
              role="button"
            >
              <i class="fab fa-github"></i>
            </a>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
