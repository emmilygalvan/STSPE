import React, { useEffect, useState } from 'react';
import Styles from '../register/RegisterForm.module.css';
import calendario from '../../assets/calendar.svg'
import drop from '../../assets/dropdown.svg'
import { estados } from '../register/estados';
import municipiosPorEstado from '../register/municipios';
import back from '../../assets/back.svg'
import axios from 'axios';
import { opcionesDependencia } from '../register/opciones';
import agregar from '../../assets/botonmas.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const EditForm = () => {

  const { state } = useLocation();

  const {
    nombre,
    apellidop,
    apellidom,
    fechanacimiento,
    lugarnacimiento,
    genero, 
    nacionalidad,
    curp,
    rfc,
    nss,
    escolaridad,
    estadocivil,
    fotoempleado,
    calle,
    numerointerior,
    numeroexterior,
    colonia,
    codigopostal,
    estado,
    municipio,
    telefono,
    celular,
    mail,
    tipodependencia,
    dependencia,
    plantel,
    fechaingreso,
    fechasolicitud,
    fechaingresostspe,
    sueldo,
    puesto,
    horaentrada,
    horasalida,
    municipioqueretaro,
    estatus,
  } = state;

  const [selectedState, setSelectedState] = useState('');
  const [selectedMunicipality, setSelectedMunicipality] = useState('');

  const formatedNacionalidad = () => {
    const fL = nacionalidad.charAt(0);
    const fLC = fL.toUpperCase();
    const rl = nacionalidad.slice(1);
    const cw = fLC + rl
    console.log(cw)
    return cw
  }

  const [formState, setFormstate] = useState({
    nombre: nombre,
    apellidoP: apellidop,
    apellidoM: apellidom,
    fechaNacimiento: fechanacimiento,
    lugarNacimiento: lugarnacimiento,
    genero: genero,
    nacionalidad: formatedNacionalidad(),
    curp: curp,
    rfc: rfc,
    nss: nss,
    escolaridad: escolaridad,
    estadoCivil: estadocivil,
    fotoEmpleado: fotoempleado,
    calle: calle,
    numeroInterior: numerointerior,
    numeroExterior: numeroexterior,
    colonia: colonia,
    codigoPostal: codigopostal,
    estado: estado,
    municipio: municipio,
    telefono: telefono,
    celular: celular,
    mail: mail,
    tipoDependencia: tipodependencia,
    dependencia: dependencia,
    plantel: plantel,
    fechaIngreso: fechaingreso,
    fechaSolicitud: fechasolicitud,
    fechaIngresoSTSPE: fechaingresostspe,
    sueldo: sueldo,
    puesto: puesto,
    horaEntrada: horaentrada,
    horaSalida: horasalida,
    municipioQueretaro: municipioqueretaro,
    estatus: estatus,
    dependientes: []
  })

  useEffect(() => {
    console.log(state, formState)
  }, [])

  const handleStateChange = (event) => {
    const newState = event.target.value;
    setSelectedState(newState);
    setSelectedMunicipality('');
    setFormstate({
      ...formState,
      estado: newState
    })
  };

  const [selectedDependency, setSelectedDependency] = useState('');
  const [selectedPlantel, setSelectedPlantel] = useState('');   

  const handleDependencyChange = (event) => {
    const newDependency = event.target.value;
    setSelectedDependency(newDependency);
    setSelectedPlantel('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(formState.apellidoM == '' || formState.nombre == '' || formState.apellidoP == ''){
      alert('El nombre completo es necesario')
      return
    }
    const resp = await axios.post('http://localhost:3000/api/employee', formState);
    console.log(resp.data);
  }

  const plantelesPorDependencia = {
    COBAQ: ["DIRECCION GENERAL", "EMSAD 12", "EMSAD11", "EMSAD13", "EMSAD14", "EMSAD15", "EMSAD18", "EMSAD19", "EMSAD20", "EMSAD21", "EMSAD22", "EMSAD23", "EMSAD24", "EMSAD25", "EMSAD26", "EMSAD27", "EMSAD28", "EMSAD3", "EMSAD30", "EMSAD31", "EMSAD32", "EMSAD4", "EMSAD6", "EMSAD7", "EMSAD8", "EMSAD9", "PLANTEL 1", "PLANTEL 2", "PLANTEL 3", "PLANTEL 4", "PLANTEL 5", "PLANTEL 6", "PLANTEL 7", "PLANTEL 8", "PLANTEL 9", "PLANTEL 10", "PLANTEL 11", "PLANTEL 12", "PLANTEL 13", "PLANTEL 14", "PLANTEL 15", "PLANTEL 16", "PLANTEL 17", "PLANTEL 18", "PLANTEL 19", "PLANTEL 20", "PLANTEL 21", "PLANTEL 22", "PLANTEL 23", "PLANTEL 24", "PLANTEL 25", "PLANTEL 26", "PLANTEL 27", "PLANTEL 28", "PLANTEL 29", "PLANTEL 30", "PLANTEL 31", "PLANTEL 32", "PLANTEL 33", "PLANTEL 34"],
  };

  const [selectedOption, setSelectedOption] = useState('');
  const [inputValue, setInputValue] = useState('');

  const navigate = useNavigate()

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);

    if (value === 'option1') {
      setInputValue('');
    }

    setFormstate({
        ...formState,
        dependencia: value
    })
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const [motivoBajaVisible, setMotivoBajaVisible] = useState(false);
  const [motivoBaja, setMotivoBaja] = useState('');

  const handleEstatusChange = (event) => {
    const nuevoEstatus = event.target.value;
    setSelectedOption(nuevoEstatus);
    setFormstate({
      ...formState,
      estatus: nuevoEstatus
    });

    if (nuevoEstatus === 'baja' || nuevoEstatus === 'expulsado') {
      setMotivoBajaVisible(true);
    } else {
      setMotivoBajaVisible(false);
    }
  };

  return (
    <form className={Styles.datosEmpleado} onSubmit={handleSubmit}>
      <div className={Styles.screenName}>
        <img src={back} alt="back" className={Styles.back} onClick={() => {
          navigate('/empleados')
        }} />
        <p className={Styles.screenTitle}>Registrar Sindicalizado</p>
      </div>

      <h1 className={Styles.title}>Datos Personales</h1>

      <div className={Styles.datosPersonales}>

        <div className={Styles.columna}> {/* nombre, fechaNacimiento, nacionalidad, nss */}

          <label>
            Nombre <br />
            <input value={formState.nombre} type="text" name="nombre" onChange={(e) => {
              setFormstate({
                ...formState,
                nombre: e.target.value
              })
            }} />
          </label>

          <label>
            Fecha de Nacimiento <br />
            <input
              value={formState.fechaNacimiento}
              type="date"
              name="fechaNacimiento"
              onChange={(e) => {
                setFormstate({
                  ...formState,
                  fechaNacimiento: e.target.value
                })
              }}
            />
          </label>

          <p> Nacionalidad </p>
          <label className={Styles.checks}>
            <input type='radio' defaultValue={formState.nacionalidad} name="nacionalidad" value="mexicana" onChange={(e) => {
              setFormstate({
                ...formState,
                nacionalidad: e.target.value
              })
            }} />
            <p>Mexicana</p>
            <input type='radio' defaultValue={formState.nacionalidad} name="nacionalidad" value="extranjera" onChange={(e) => {
              setFormstate({
                ...formState,
                nacionalidad: e.target.value
              })
            }} />
            <p>Extranjera</p>
          </label>

          <label>
            NSS <br />
            <input value={formState.nss} type="text" name="nss" onChange={(e) => {
              setFormstate({
                ...formState,
                nss: e.target.value
              })
            }} />
          </label>

        </div>

        <div className={Styles.columna}>  {/* apellidoP, lugarNacimiento, curp, escolaridad*/}

          <label>
            Apellido Paterno<br />
            <input value={formState.apellidoP} type="text" name="apellidoP" onChange={(e) => {
              setFormstate({
                ...formState,
                apellidoP: e.target.value
              })
            }} />
          </label>


          <label>
            Lugar de Nacimiento<br/>
            <select name="lugarNacimiento"
              onChange={(e) => {
                setFormstate({
                  ...formState,
                  lugarNacimiento: e.target.value
                })
              }}
            >
              <option disabled selected value="">Selecciona una opción</option>
              {Object.entries(estados).map(([value, label], index) => (
                <option key={index} value={value}>{label}</option>
              ))}
            </select>
          </label>

          <label>
            CURP <br/>
            <input type="text" name="curp" onChange={(e) => {
              setFormstate({
                ...formState,
                curp: e.target.value
              })
            }} />
          </label>

          <label>
            Escolaridad<br />
            <select name="escolaridad"
              onChange={(e) => {
                setFormstate({
                  ...formState,
                  escolaridad: e.target.value
                })
              }}
            >
              <option disabled selected value="">Selecciona una opción</option>
              <option value="primaria">Primaria</option>
              <option value="secundaria">Secundaria</option>
              <option value="preparatoria">Preparatoria</option>
              <option value="carreraTecnica">Carrera Tecnica</option>
              <option value="tsu">Técnico Superior Universitario</option>
              <option value="licenciatura">Licenciatura</option>
              <option value="maestria">Maestria</option>
              <option value="doctorado">Doctorado</option>
            </select>
          </label>

        </div>

        <div className={Styles.columna}> {/*apellidoM, genero, rfc, estadoCivil*/}

          <label>
            Apellido Materno<br />
            <input type="text" name="apellidoM" onChange={(e) => {
              setFormstate({
                ...formState,
                apellidoM: e.target.value
              })
            }} />
          </label>

          <text>Genero</text>
          <label className={Styles.checks}>
            <input type='radio' name="genero" value="masculino" onChange={(e) => {
              setFormstate({
                ...formState,
                genero: e.target.value
              })
            }} />
            <p>Masculino</p>
            <input type='radio' name="genero" value="femenino" onChange={(e) => {
              setFormstate({
                ...formState,
                genero: e.target.value
              })
            }} />
            <p>Femenino</p>
          </label>

          <label>
            RFC <br />
            <input type="text" name="rfc" onChange={(e) => {
              setFormstate({
                ...formState,
                rfc: e.target.value
              })
            }} />
          </label>

          <label>
            Estado Civil<br />
            <select name="estadodoCivil"
              onChange={(e) => {
                setFormstate({
                  ...formState,
                  estadoCivil: e.target.value
                })
              }}
            >
              <option disabled selected value="">Selecciona una opción</option>
              <option value="soltero">Soltero</option>
              <option value="casado">Casado</option>
              <option value="divorciado">Divorciado</option>
              <option value="viudo">Viudo</option>
            </select>
          </label>

        </div>

      </div>

      <div className={Styles.uploadFoto}> {/*fotoEmpleado*/}
        <text>Foto del Empleado</text>
        <input type='file' accept="image/png, image/jpeg, image/jpg" name="fotoEmpleado"
          onChange={(e) => {
            setFormstate({
              ...formState,
              fotoEmpleado: e.target.value
            })
          }}
        />
      </div>

      <h1 className={Styles.title}>Contacto</h1>

      <div className={Styles.contacto}> 
        <div className={Styles.columna}> {/*calle, codigoPostal, telefono*/}

          <label>
            Calle <br />
            <input type="text" name="calle" onChange={(e) => {
              setFormstate({
                ...formState,
                calle: e.target.value
              })
            }} />
          </label>

          <label>
            Codigo Postal<br />
            <input type="number" name="codigoPostal" onChange={(e) => {
              setFormstate({
                ...formState,
                codigoPostal: e.target.value
              })
            }} />
          </label>

          <label>
            Teléfono <br />
            <input type="tel" name="telefono" onChange={(e) => {
              setFormstate({
                ...formState,
                telefono: e.target.value
              })
            }} />
          </label>
        </div>

        <div className={Styles.columna}> {/*numeroInterior, numeroExterior, estado, celular*/}

          <label className={Styles.numeroie}>
            <label>
              Num. Interior<br />
              <input type='text' name="numeroInterior" onChange={(e) => {
                setFormstate({
                  ...formState,
                  numeroInterior: e.target.value
                })
              }} />
            </label>
            <label>
              Num. Exterior<br />
              <input type='text' name="numeroExterior" onChange={(e) => {
                setFormstate({
                  ...formState,
                  numeroExterior: e.target.value
                })
              }} />
            </label>
          </label>

          <label>
            Estado<br />
            <select name="estado" value={selectedState} onChange={handleStateChange}>
              <option disabled selected value="">Selecciona una opción</option>
              {Object.entries(estados).map(([value, label], index) => (
                <option key={index} value={value}>{label}</option>
              ))}
            </select>
          </label>

          <label>
            Celular <br />
            <input type="tel" name="celular" onChange={(e) => {
              setFormstate({
                ...formState,
                celular: e.target.value
              })
            }} />
          </label>

        </div>

        <div className={Styles.columna}> {/*colonia, municipio, mail*/}
          <label>
            Colonia <br />
            <input type="text" name="colonia" onChange={(e) => {
              setFormstate({
                ...formState,
                colonia: e.target.value
              })
            }} />
          </label>

          <label>
            Municipio <br />
            <select name="municipio" value={selectedMunicipality} onChange={(event) => {
                setSelectedMunicipality(event.target.value)
                setFormstate({ ...formState, municipio: event.target.value })
            }}>
              <option disabled selected value="">Selecciona una opción</option>
              {municipiosPorEstado[selectedState]?.map((municipio, index) => (
                <option key={index} value={municipio}>{municipio}</option>
              ))}
            </select>
          </label>

          <label>
            Correo<br />
            <input type="email" name="mail" onChange={(e) => {
              setFormstate({
                ...formState,
                mail: e.target.value
              })
            }} />
          </label>
        </div>

      </div>

      <h1 className={Styles.title}>Información del Empleo</h1>

      <div className={Styles.infoEmpleo}>

        <div className={Styles.columna}> {/* tipoDependencia, fechaIngreso, sueldo */}
          <label>
            Tipo de Dependencia<br />
            <select name="tipoDependencia" onChange={(e) => {
              setFormstate({
                ...formState,
                tipoDependencia: e.target.value
              })
            }}>
              <option disabled selected value="">Selecciona una opción</option>
              <option value="descentralizada">Descentralizada</option>
              <option value="poderEjecutivo">Poder Ejecutivo</option>
              <option value="poderJudicial">Poder Judicial</option>
              <option value="poderLegislativo">Poder Legislativo</option>
            </select>
          </label>

          <label>
            Fecha de Ingreso<br />
            <input
              type="date"
              name="fechaIngreso"
              onChange={(e) => {
                setFormstate({
                  ...formState,
                  fechaIngreso: e.target.value
                })
              }}
            />
          </label>

          <label>
            Sueldo <br />
            <input type="number" name="sueldo" onChange={(e) => {
                setFormstate({
                  ...formState,
                  sueldo: e.target.value
                })
              }}/>
          </label>
        </div>

        <div className={Styles.columna}> {/* dependencia, fechaSolicitud, estado*/}
          
          <label className={Styles.dependencia} value={selectedOption} onChange={handleSelectChange}>
            Dependencia<br />
            <select name="dependencia" value={selectedDependency} onChange={handleDependencyChange}>
              <option disabled selected value="">Selecciona una opción</option>
              {opcionesDependencia.map((opcion) => (
                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
              ))}
            </select>
          </label>

          <label>
            Fecha de Solicitud<br />
            <input onChange={(e) => {
              setFormstate({
                ...formState,
                fechaSolicitud: e.target.value
              })
            }} 
              type="date"
              name="fechaSolicitud"
            />
          </label>

          <label>
            Estado<br />
            <select name="estado" value={selectedState} onChange={handleStateChange}>
              <option disabled selected value="">Selecciona una opción</option>
              {Object.entries(estados).map(([value, label], index) => (
                <option key={index} value={value}>{label}</option>
              ))}
            </select>
          </label>
        
        </div>

        <div className={Styles.columna}> {/* Area o Plantel, fechaSolicitud, estado*/}

          {selectedOption !== 'COBAQ' ? (
            <div className={Styles.areaP}>
              <label>Area o Plantel</label>
              <input
                type="text"
                name="area"
                value={selectedPlantel}
                onChange={(event) => {
                    setSelectedPlantel(event.target.value)
                    setFormstate({...formState, plantel: event.target.value})
                }}
              />
            </div>
          ) : (
            <div className={Styles.areaP}>
              <label>
                Area o Plantel <br />
                <select name="plantel" value={selectedPlantel} onChange={(event) => {
                    setSelectedPlantel(event.target.value)
                    setFormstate({...formState, plantel: event.target.value})
                }}>
                  <option disabled selected value="">Selecciona una opción</option>
                  {plantelesPorDependencia[selectedDependency]?.map((plantel, index) => (
                    <option key={index} value={plantel}>{plantel}</option>
                  ))}
                </select>
              </label>
            </div>
          )}

          <label>
            Fecha de Ingreso al STSPE<br />
            <input onChange={(e) => {
              setFormstate({
                ...formState,
                fechaIngresoSTSPE: e.target.value
              })
            }} 
              type="date"
              name="fechaIngresoSTSPE"
            />
          </label>

          <label>
            Estatus<br />
            <select name="estatus" value={selectedOption} onChange={handleEstatusChange}>
              <option disabled selected value="">Selecciona una opción</option>
              <option value="activo">Activo</option>
              <option value="inactivo">Inactivo</option>
              <option value="finado">Finado</option>
              <option value="licencia">Licencia</option>
              <option value="baja">Baja</option>
              <option value="expulsado">Expulsado</option>
            </select>
          </label>
        </div>
      </div>

      {motivoBajaVisible && (
        <label className={Styles.motivoBaja}>
          Motivo de baja<br />
          <textarea className={Styles.motivoBajaInput}
            type="text"
            name="motivoBaja"
            value={motivoBaja}
            onChange={(event) => setMotivoBaja(event.target.value)
            }
          />
        </label>
      )}
      
      <input type="submit" value="Guardar Empleado" className={Styles.sendForm} />

    </form>
  )
}