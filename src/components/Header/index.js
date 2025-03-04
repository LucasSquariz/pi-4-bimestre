import { Link, useLocation, useNavigate } from "react-router-dom";
import api from "../../services/api"
import React, { useEffect } from "react";
import { useAuth } from "../../providers/Auth";
import "./style.scss";

const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { user, setUser } = useAuth()

  const loadCategorys = async () => {
    if (!sessionStorage.getItem("categories")) {
      try {
        const response = await api.get("categoria")
        console.log(response.data)
        sessionStorage.setItem("categories", JSON.stringify(response.data))
      } catch (err) {
        console.log(err)
      }
    }
  }
  loadCategorys()

  useEffect(() => {
    const userStorage = localStorage.getItem("user")
    if (userStorage &&
        JSON.parse(userStorage).isLogged &&
          !document.getElementById("circle")) {
      const menus = document.querySelectorAll(".menu")
      if (menus[0]) {
        menus.forEach(element => element.parentNode.removeChild(element))
      }
      const perfis = document.getElementById("perfis")
      const divPerfil = document.createElement("div")
      const namePerfil = document.createElement("p")
      const closePerfil = document.createElement("i")
      const circlePerfil = document.createElement("div")
      
      closePerfil.addEventListener("click", () => {
        navigate("/")
        localStorage.removeItem("user")
        setUser({
          email: "",
          isLogged: false
        })
        window.location.reload()
      })
      
      closePerfil.setAttribute("class", "fas fa-times")
      circlePerfil.setAttribute("id", "circle")
      
      divPerfil.appendChild(circlePerfil)

      if (JSON.parse(userStorage).admin) {
        const iconAdmin = document.createElement("i")
        iconAdmin.setAttribute("class", "fas fa-user-cog")
        iconAdmin.style.cursor = "pointer"
        iconAdmin.onclick = function() {
          navigate("/administration")
        }
        divPerfil.appendChild(iconAdmin)
      }

      divPerfil.appendChild(namePerfil)
      divPerfil.appendChild(closePerfil)
      perfis.appendChild(divPerfil)

      circlePerfil.style.width = "35px"
      circlePerfil.style.height = "35px"
      circlePerfil.style.borderRadius = "50%"
      circlePerfil.style.backgroundColor = "var(--second--color)"
      circlePerfil.style.display = "flex"
      circlePerfil.style.justifyContent = "center"
      circlePerfil.style.alignItems = "center"
      circlePerfil.style.color = "white"
      circlePerfil.style.fontSize = "24px"
      circlePerfil.style.fontWeight = "500"
      namePerfil.style.fontSize = "14px"
      closePerfil.style.cursor = "pointer"

      circlePerfil.innerText = `${JSON.parse(userStorage).name[0].toUpperCase()}${JSON.parse(userStorage).secondName[0].toUpperCase()}`
      const name = JSON.parse(userStorage).name
      const secondName = JSON.parse(userStorage).secondName
      namePerfil.innerHTML = `Olá, <br/><span style="color: var(--first--color);">${name[0].toUpperCase() || ""}${name.slice(1, name.length) || ""} ${secondName[0].toUpperCase() || ""}${secondName.slice(1, secondName.length) || ""}</span>`
    }
  }, [user])

  return (
    <header>
      <div>
        <Link to="/">
          <svg
            width="71"
            height="52"
            viewBox="0 0 71 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M67.7248 0H3.27521C1.46636 0 0 1.438 0 3.21186V48.7881C0 50.562 1.46636 52 3.27521 52H67.7248C69.5336 52 71 50.562 71 48.7881V3.21186C71 1.438 69.5336 0 67.7248 0Z"
              fill="#545776"
            />
            <path
              d="M47.4049 35.838C46.3556 35.8369 45.3074 35.7682 44.2673 35.6324C43.2956 35.5167 42.3453 35.268 41.444 34.8937C40.6568 34.5765 39.9647 34.068 39.433 33.4163C38.9053 32.7083 38.6396 31.8449 38.6797 30.9688V9.72559H44.1755V19.9072L43.1209 18.1728C43.5973 17.6413 44.1879 17.2201 44.8502 16.9394C45.5338 16.6376 46.2535 16.4217 46.9922 16.2971C47.5887 16.1867 48.1933 16.1244 48.8001 16.1108C51.6081 16.1108 53.7457 16.9416 55.213 18.6032C56.6803 20.2648 57.4139 22.6929 57.4139 25.8877C57.459 27.4934 57.2037 29.0936 56.6607 30.6091C56.2276 31.7846 55.5054 32.8371 54.558 33.6732C53.6376 34.443 52.5583 35.0084 51.3941 35.3305C50.0959 35.6854 48.7525 35.8563 47.4049 35.838ZM47.3329 31.2643C48.2517 31.3083 49.1634 31.0848 49.953 30.6219C50.6041 30.1886 51.0974 29.5631 51.3614 28.8361C51.6627 27.9945 51.809 27.1071 51.7937 26.2153C51.8417 25.0694 51.65 23.9261 51.2304 22.8557C50.93 22.1065 50.3898 21.4731 49.691 21.0506C49.0016 20.6717 48.2212 20.4809 47.4311 20.4982C46.8761 20.5028 46.323 20.5631 45.7804 20.678C45.2128 20.7906 44.6668 20.99 44.1624 21.269V29.5363C44.149 29.727 44.179 29.9181 44.2504 30.0959C44.3218 30.2737 44.4327 30.4337 44.5751 30.5641C44.9035 30.8378 45.2983 31.0236 45.7215 31.1037C46.2505 31.2186 46.791 31.2747 47.3329 31.2707V31.2643Z"
              fill="white"
            />
            <path
              d="M13.9453 35.2855V10.6826H24.0264C28.2929 10.6826 31.4284 11.7233 33.4328 13.8045C35.4372 15.8858 36.4395 18.9478 36.4395 22.9905C36.4395 27.0246 35.4372 30.0801 33.4328 32.1571C31.4284 34.2341 28.2929 35.2726 24.0264 35.2726L13.9453 35.2855ZM20.0372 30.6797H23.3124C25.5701 30.6797 27.282 30.0651 28.4479 28.8361C29.6139 27.6027 30.1969 25.6627 30.1969 23.0033C30.1969 20.3439 29.6139 18.3397 28.4479 17.1192C27.282 15.8987 25.5723 15.282 23.3124 15.282H20.0372V30.6797Z"
              fill="white"
            />
            <path
              d="M34.1274 40.6496V42.2619H13.5918V40.6367L34.1274 40.6496Z"
              fill="white"
            />
            <path
              d="M54.6625 40.6496V42.2619H34.127V40.6367L54.6625 40.6496Z"
              fill="white"
            />
          </svg>
        </Link>
        <p>Sinta-se em casa</p>
      </div>
      <div id="perfis">
        {location.pathname === "/login"? "": <Link className="menu" to="/login">Login</Link>}
        {location.pathname === "/register"? "":<Link className="menu" to="/register">Registrar</Link>}
      </div>
    </header>
  );
};

export default Header;
