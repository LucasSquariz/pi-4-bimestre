import './style.scss';

function Politica() {
    return (
        <>
            <div className="politica"> {/* --- Início do bloco de políticas do produto --- */}
                <div className="normas">
                    <h5>Regras</h5>
                    <p>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM14.59 5.58L8 12.17L5.41 9.59L4 11L8 15L16 7L14.59 5.58Z" fill="#383B58" />
                        </svg>
                        <span className="normas-texto">Check in: antes das 13h</span>
                    </p>
                    <p>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM14.59 5.58L8 12.17L5.41 9.59L4 11L8 15L16 7L14.59 5.58Z" fill="#383B58" />
                        </svg>
                        <span className="normas-texto">Check out: depois das 13h</span>
                    </p>
                    <p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 6L9 13H2V16H12L19 23L20.25 21.75L3.25 4.75L2 6ZM20.5 13H22V16H20.5V13ZM18 13H19.5V16H18V13ZM18.85 4.88C19.47 4.27 19.85 3.43 19.85 2.5H18.35C18.35 3.5 17.5 4.35 16.5 4.35V5.85C18.74 5.85 20.5 7.68 20.5 9.92V12H22V9.92C22 7.69 20.72 5.77 18.85 4.88ZM14.5 8.7H16.03C17.08 8.7 18 9.44 18 10.75V12H19.5V10.41C19.5 8.61 17.9 7.25 16.03 7.25H14.5C13.5 7.25 12.65 6.27 12.65 5.25C12.65 4.23 13.5 3.5 14.5 3.5V2C13.6115 2 12.7594 2.35295 12.1312 2.98119C11.5029 3.60944 11.15 4.46152 11.15 5.35C11.15 6.23848 11.5029 7.09056 12.1312 7.71881C12.7594 8.34705 13.6115 8.7 14.5 8.7ZM17 15.93V13H14.07L17 15.93Z" fill="#383B58" />
                        </svg>
                        <span className="normas-texto">Proibido fumar</span>
                    </p>
                    <p>
                        <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.39092 0.0150431C7.57092 -0.154957 8.82092 1.13504 9.18092 2.91504C9.54092 4.68504 8.89092 6.26504 7.71092 6.44504C6.54092 6.62504 5.28092 5.33504 4.91092 3.55504C4.54092 1.78504 5.21092 0.205043 6.39092 0.0150431ZM13.5409 0.0150431C14.7309 0.205043 15.3909 1.78504 15.0409 3.55504C14.6609 5.33504 13.4109 6.62504 12.2309 6.44504C11.0409 6.26504 10.3909 4.68504 10.7609 2.91504C11.1209 1.13504 12.3709 -0.154957 13.5409 0.0150431ZM1.04092 4.61504C2.18092 4.12504 3.73092 5.01504 4.54092 6.56504C5.30092 8.14504 5.04092 9.80504 3.91092 10.295C2.78092 10.785 1.24092 9.90504 0.450922 8.33504C-0.339078 6.76504 -0.059078 5.09504 1.04092 4.61504ZM19.0409 4.61504C20.1409 5.09504 20.4209 6.76504 19.6309 8.33504C18.8409 9.90504 17.3009 10.785 16.1709 10.295C15.0409 9.80504 14.7809 8.14504 15.5409 6.56504C16.3509 5.01504 17.9009 4.12504 19.0409 4.61504ZM17.3709 15.395C17.4109 16.335 16.6909 17.375 15.8309 17.765C14.0409 18.585 11.9209 16.885 9.93092 16.885C7.94092 16.885 5.80092 18.655 4.04092 17.765C3.04092 17.275 2.35092 15.975 2.48092 14.895C2.66092 13.405 4.45092 12.605 5.51092 11.515C6.92092 10.105 7.92092 7.45504 9.93092 7.45504C11.9309 7.45504 12.9909 10.065 14.3409 11.515C15.4509 12.735 17.3009 13.765 17.3709 15.395Z" fill="#383B58" />
                        </svg>
                        <span className="normas-texto">Animais de estimação são permitidos</span>
                    </p>
                    <p>
                        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.53 0L12.45 1.08L14.05 2.68C14.27 2.93 14.38 3.22 14.38 3.55C14.38 3.88 14.27 4.19 14.05 4.41L10.5 8.02L11.5 9.1L15.13 5.49C15.66 4.9 15.92 4.25 15.92 3.55C15.92 2.85 15.66 2.19 15.13 1.6L13.53 0ZM9.55 2.02L8.47 3.1L9.08 3.66C9.3 3.88 9.41 4.18 9.41 4.55C9.41 4.92 9.3 5.22 9.08 5.44L8.47 6L9.55 7.08L10.11 6.47C10.64 5.88 10.91 5.24 10.91 4.55C10.91 3.83 10.64 3.18 10.11 2.58L9.55 2.02ZM20 3.61C19.31 3.61 18.67 3.88 18.08 4.41L12.45 10.05L13.53 11.05L19.11 5.49C19.36 5.24 19.66 5.11 20 5.11C20.34 5.11 20.64 5.24 20.89 5.49L21.5 6.1L22.53 5.02L21.97 4.41C21.38 3.88 20.72 3.61 20 3.61ZM6 6.55L1 20.55L15 15.55L6 6.55ZM18 9.61C17.3 9.61 16.66 9.88 16.06 10.41L14.47 12L15.55 13.08L17.14 11.49C17.39 11.24 17.67 11.11 18 11.11C18.33 11.11 18.63 11.24 18.88 11.49L20.5 13.08L21.55 12.05L19.95 10.41C19.36 9.88 18.7 9.61 18 9.61Z" fill="#383B58" />
                            <line x1="0.707107" y1="8.29289" x2="13.7071" y2="21.2929" stroke="#383B58" strokeWidth="2" />
                        </svg>
                        <span className="normas-texto">Não são permitidas festas ou eventos</span>
                    </p>
                </div>
                <div className="seguranca">
                    <h5>Segurança e higiene</h5>
                    <p>
                        <svg width="24" height="24" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.05 17.05H13.95V7.75H17.05V17.05ZM17.05 23.25H13.95V20.15H17.05V23.25ZM15.5 0C13.4645 0 11.449 0.400919 9.56841 1.17987C7.68786 1.95882 5.97915 3.10054 4.53984 4.53984C1.63303 7.44666 0 11.3891 0 15.5C0 19.6109 1.63303 23.5533 4.53984 26.4602C5.97915 27.8995 7.68786 29.0412 9.56841 29.8201C11.449 30.5991 13.4645 31 15.5 31C19.6109 31 23.5533 29.367 26.4602 26.4602C29.367 23.5533 31 19.6109 31 15.5C31 13.4645 30.5991 11.449 29.8201 9.56841C29.0412 7.68786 27.8995 5.97915 26.4602 4.53984C25.0208 3.10054 23.3121 1.95882 21.4316 1.17987C19.551 0.400919 17.5355 0 15.5 0Z" fill="#383B58" />
                        </svg>
                        <span className="normas-texto">O locador se compromete com a higienização do local antes e depois da locação</span>
                    </p>
                    <p>
                        <svg width="24" height="24" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.05 17.05H13.95V7.75H17.05V17.05ZM17.05 23.25H13.95V20.15H17.05V23.25ZM15.5 0C13.4645 0 11.449 0.400919 9.56841 1.17987C7.68786 1.95882 5.97915 3.10054 4.53984 4.53984C1.63303 7.44666 0 11.3891 0 15.5C0 19.6109 1.63303 23.5533 4.53984 26.4602C5.97915 27.8995 7.68786 29.0412 9.56841 29.8201C11.449 30.5991 13.4645 31 15.5 31C19.6109 31 23.5533 29.367 26.4602 26.4602C29.367 23.5533 31 19.6109 31 15.5C31 13.4645 30.5991 11.449 29.8201 9.56841C29.0412 7.68786 27.8995 5.97915 26.4602 4.53984C25.0208 3.10054 23.3121 1.95882 21.4316 1.17987C19.551 0.400919 17.5355 0 15.5 0Z" fill="#383B58" />
                        </svg>
                        <span className="normas-texto">A residência possui câmeras de segurança</span>
                    </p>
                    <p>
                        <svg width="24" height="24" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.05 17.05H13.95V7.75H17.05V17.05ZM17.05 23.25H13.95V20.15H17.05V23.25ZM15.5 0C13.4645 0 11.449 0.400919 9.56841 1.17987C7.68786 1.95882 5.97915 3.10054 4.53984 4.53984C1.63303 7.44666 0 11.3891 0 15.5C0 19.6109 1.63303 23.5533 4.53984 26.4602C5.97915 27.8995 7.68786 29.0412 9.56841 29.8201C11.449 30.5991 13.4645 31 15.5 31C19.6109 31 23.5533 29.367 26.4602 26.4602C29.367 23.5533 31 19.6109 31 15.5C31 13.4645 30.5991 11.449 29.8201 9.56841C29.0412 7.68786 27.8995 5.97915 26.4602 4.53984C25.0208 3.10054 23.3121 1.95882 21.4316 1.17987C19.551 0.400919 17.5355 0 15.5 0Z" fill="#383B58" />
                        </svg>
                        <span className="normas-texto">O locatário deve fazer o pré-cadastro no condomínio para ter acesso</span>
                    </p>
                </div>
                <div className="cancelamento">
                    <h5>Cancelamento</h5>
                    <p>
                        O cancelamento deve ser realizado pelo locador ou locatário com pelo menos 72 horas de antecedência da data reservada.
                    </p>
                </div>
            </div> {/* --- Fim do bloco de políticas do produto --- */}
        </>
    )

}

export default Politica;