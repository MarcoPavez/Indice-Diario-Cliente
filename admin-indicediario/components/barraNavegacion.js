import { useState, useEffect, useRef } from 'react';

export default function BarraNavegacion() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const [usuarioIngresado, setUsuarioIngresado] = useState(false);

    const verificarUsuario = async () => {
    
        const usuarioLocal = localStorage.getItem("usuario");
        if (usuarioLocal == null) {
            window.location = "inicio.html";
        }
        const objetoUsuario = JSON.parse(usuarioLocal);
        const token = objetoUsuario.stsTokenManager.accessToken;
    
        const baseURL = "https://placid-seen-raven.glitch.me";
        const url = baseURL + "/usuario/verificarToken";
      
        try {
          const respuesta = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + token,
            },
          });
      
          if (!respuesta.ok) {
            throw new Error("Token inválido");
          }
    
          const data = await respuesta.json();
          return data;
        } catch (error) {
          console.log(error.message);
          window.location = "ingreso.html";
          throw new Error("Error al verificar usuario");
        }
      };

    const toggleMenu = () => {
        setIsMenuOpen(true);
    };

    useEffect(() => {
        const handleClickOutsideMenu = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                    setIsMenuOpen(false);        
            }
        };
        document.addEventListener("mousedown", handleClickOutsideMenu);
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideMenu);
        };

    }, [menuRef]);

    useEffect(() => {
        let usuario = localStorage.getItem("usuario")
        if (usuario) {
            setUsuarioIngresado(true);
        }
    }, [])

    const handleCerrarSesion = () => {
        localStorage.removeItem('usuario');
        const usuarioLocal = localStorage.getItem("usuario");
        if (usuarioLocal == null) {
            window.location = "/inicio.html";
        } else {
            window.location = "/perfil"
        }
    
        verificarUsuario();
    }

    return (
        <>
            <nav>
                <picture id="contenedor-icono-barras" onClick={toggleMenu}>
                    <img src="./assets/img/barras.svg" alt="" id="icono-barras" />
                </picture>
                <a href="/inicio.html">
                    <h1 id="titulo-principal">Índice Diario</h1>
                </a>
                <ul id="lista-barra-navegacion">
                    <li><a href="/inicio.html">Inicio</a></li>
                    <li><a href="/planes.html">Planes</a></li>
                    <li><a href="/glosario.html">Glosario</a></li>
                    <li><a href="/registro.html">Regístrate</a></li>
                </ul>

            </nav>
            {isMenuOpen && (
                <section id="menu-lateral" classNameName={'show'} ref={menuRef}>
                    <h3>Menú</h3>
                    <ul id="lista-menu-lateral">
                        <li>
                            <a href="/inicio.html" className="links-menu-lateral">
                                <img src="./assets/img/casa.svg" alt="" className="iconos-menu-lateral" />
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a href="/planes.html" className="links-menu-lateral">
                                <img src="./assets/img/papel.svg" alt="" className="iconos-menu-lateral" />
                                Planes
                            </a>
                        </li>
                        <li>
                            <a href="/glosario.html" className="links-menu-lateral">
                                <img src="./assets/img/listado.svg" alt="" className="iconos-menu-lateral" />
                                Glosario
                            </a>
                        </li>

                        {usuarioIngresado ?
                            <>
                                <li>
                                    <a href="/perfil" className="links-menu-lateral">
                                        <img src="" alt="" className="iconos-menu-lateral" />
                                        Perfil
                                    </a>
                                </li>
                                <li>
                                    <button onClick={handleCerrarSesion}>

                                        Cerrar<br /> sesión
                                    </button>
                                </li>
                            </>
                            :
                            <>
                                <li>
                                    <a href="/ingreso.html" className="links-menu-lateral">
                                        <img src="./assets/img/ingreso.svg" alt="" className="iconos-menu-lateral" />
                                        Ingresa
                                    </a>
                                </li>
                                <li>
                                    <a href="/registro.html" className="links-menu-lateral">
                                        <img src="./assets/img/registro.svg" alt="" className="iconos-menu-lateral" />
                                        Regístrate
                                    </a>
                                </li>
                            </>

                        }
                    </ul>
                </section>
            )}
        </>

    )
}