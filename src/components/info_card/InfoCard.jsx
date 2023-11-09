import React, { useState } from 'react';
import Styles from './InfoCard.module.css';
import calendario from '../../assets/calendar.svg'
import drop from '../../assets/dropdown.svg'
import { estados } from './estados';
import municipiosPorEstado from './municipios';
import back from '../../assets/back.svg'
import axios from 'axios';

export const InfoCard = () => {

  const [selectedState, setSelectedState] = useState('');
  const [selectedMunicipality, setSelectedMunicipality] = useState('');

  const [formState, setFormstate] = useState({
    nombre: '',
    apellidoP: '',
    apellidoM: '',
    fechaNacimiento: '',
    lugarNacimiento: '',
    genero: '',
    nacionalidad: '',
    curp: '',
    rfc: '',
    nss: '',
    escolaridad: '',
    estadoCivil: '',
    fotoEmpleado: '',
    calle: '',
    numeroInterior: '',
    numeroExterior: '',
    colonia: '',
    codigoPostal: '',
    estado: '',
    municipio: '',
    telefono: '',
    celular: '',
    mail: '',
    tipoDependencia: '',
    dependencia: '',
    plantel: '',
    fechaIngreso: '',
    fechaSolicitud: '',
    sueldo: '',
    puesto: '',
    horaEntrada: '',
    horaSalida: '',
    municipioQueretaro: '',
    estatus: '',  
  })

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

  const handleSubmit = async ( e ) => {
    e.preventDefault()
    console.log(formState);
    const resp = await axios.post('http://172.20.10.3:8081/api/employees', formState);
    console.log(resp.data);
  }
  
  const plantelesPorDependencia = {
    COBAQ: ["DIRECCION GENERAL", "EMSAD 12", "EMSAD11", "EMSAD13", "EMSAD14", "EMSAD15", "EMSAD18", "EMSAD19", "EMSAD20", "EMSAD21", "EMSAD22", "EMSAD23", "EMSAD24", "EMSAD25", "EMSAD26", "EMSAD27", "EMSAD28", "EMSAD3", "EMSAD30", "EMSAD31", "EMSAD32", "EMSAD4", "EMSAD6", "EMSAD7", "EMSAD8", "EMSAD9", "PLANTEL 1", "PLANTEL 2", "PLANTEL 3", "PLANTEL 4", "PLANTEL 5", "PLANTEL 6", "PLANTEL 7", "PLANTEL 8", "PLANTEL 9", "PLANTEL 10", "PLANTEL 11", "PLANTEL 12", "PLANTEL 13", "PLANTEL 14", "PLANTEL 15", "PLANTEL 16", "PLANTEL 17", "PLANTEL 18", "PLANTEL 19", "PLANTEL 20", "PLANTEL 21", "PLANTEL 22", "PLANTEL 23", "PLANTEL 24", "PLANTEL 25", "PLANTEL 26", "PLANTEL 27", "PLANTEL 28", "PLANTEL 29", "PLANTEL 30", "PLANTEL 31", "PLANTEL 32", "PLANTEL 33", "PLANTEL 34"],
    CONALEP: ["AMEALCO", "QUERETARO", "SAN JUAN DEL RIO"],
  };

  return (
    <form className={Styles.datosEmpleado} onSubmit={handleSubmit}>
      <div className={Styles.screenName}>
        <img src={back} alt="back" className={Styles.back}/>
        <h1>Registro Empleado</h1>
      </div>

      <h1 className={Styles.title}>Datos Personales</h1>

      <div className={Styles.datosPersonales}>

        <div className={Styles.columna}>
          
          <label>
            Nombre <br/>
            <input type="text" name="nombre" onChange={( e ) => {
              setFormstate({
                ...formState,
                nombre: e.target.value
              })
            } }/>
          </label>

          <label>
            Fecha de Nacimiento <br/>
            <input 
              type="date" 
              name="fechaNacimiento"
              onChange={( e ) => {
                setFormstate({
                  ...formState,
                  fechaNacimiento: e.target.value
                })
              }}
            />
          </label>

          <text>Nacionalidad</text>
          <label className={Styles.checks}>
            <input type='radio' name="nacionalidad" value="mexicana" onChange={( e ) => {
              setFormstate({
                ...formState,
                nacionalidad: e.target.value})}} /> 
            <p>Mexicana</p>
            <input type='radio' name="nacionalidad" value="extranjera" onChange={( e ) => {
              setFormstate({
                ...formState,
                nacionalidad: e.target.value})}} />
            <p>Extranjera</p>
          </label>

          <label>
            NSS <br/>
            <input type="text" name="nss" onChange={( e ) => {
              setFormstate({
                ...formState,
                nss: e.target.value
              })
            } } />
          </label>
        </div>

        <div className={Styles.columna}>
          
          <label>
            Apellido Paterno<br/>
            <input type="text" name="apellidoP" onChange={( e ) => {
              setFormstate({
                ...formState,
                apellidoP: e.target.value
              })
            }}/>
          </label>
          
          <label>
            Lugar de Nacimiento<br/>
            <select name="lugarNacimiento"
            onChange={( e ) => {
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
            <input type="text" name="curp" onChange={( e ) => {
              setFormstate({
                ...formState,
                curp: e.target.value
              })
            }}/>
          </label>

          <label>
            Escolaridad<br/>
            <select name="escolaridad"
            onChange={( e ) => {
              setFormstate({
                ...formState,
                escolaridad: e.target.value
              })
            } }
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

        <div className={Styles.columna}>
          
        <label>
            Apellido Materno<br/>
            <input type="text" name="apellidoM" onChange={( e ) => {
              setFormstate({
                ...formState,
                apellidoM: e.target.value
              })
            }}/>
          </label>
          
          <text>Genero</text>
          <label className={Styles.checks}>
            <input type='radio' name="genero" value="masculino" onChange={( e ) => {
              setFormstate({
                ...formState,
                genero: e.target.value})}} />
            <p>Masculino</p>
            <input type='radio' name="genero" value="femenino" onChange={( e ) => {
              setFormstate({
                ...formState,
                genero: e.target.value})}} />
            <p>Femenino</p>
          </label>

          <label>
            RFC <br/>
            <input type="text" name="rfc" onChange={( e ) => {
              setFormstate({
                ...formState,
                rfc: e.target.value
              })
            }}/>
          </label>

          <label>
            Estado Civil<br/>
            <select name="estadodoCivil" 
            onChange={( e ) => {
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

      <div className={Styles.uploadFoto}>
        <text>Foto del Empleado</text>
        <input type='file' accept="image/png, image/jpeg, image/jpg" name="fotoEmpleado"
          onChange={( e ) => {
            setFormstate({
              ...formState,
              fotoEmpleado: e.target.value
            })
          }}
        />
      </div>

      <h1 className={Styles.title}>Contacto</h1>

      <div className={Styles.contacto}>

        <div className={Styles.columna}>

          <label>
            Calle <br/>
            <input type="text" name="calle" onChange={( e ) => {
              setFormstate({
                ...formState,
                calle: e.target.value
              })
            }}/>
          </label>

          <label>
            Codigo Postal<br/>
              <input type="number" name="codigoPostal" onChange={( e ) => {
              setFormstate({
                ...formState,
                codigoPostal: e.target.value
              })
            }}/>
          </label>

          <label>
            Teléfono <br/>
            <input type="tel" name="telefono" onChange={( e ) => {
              setFormstate({
                ...formState,
                telefono: e.target.value
              })
            }}/>
          </label>
        </div>

        <div className={Styles.columna}>

          <label className={Styles.numeroie}>
            <label>
              Num. Interior<br/>
              <input type='text' name="numeroInterior" onChange={( e ) => {
              setFormstate({
                ...formState,
                numeroInterior: e.target.value
              })
            }}/> 
            </label>
            <label>
              Num. Exterior<br/>
              <input type='text' name="numeroExterior" onChange={( e ) => {
              setFormstate({
                ...formState,
                numeroExterior: e.target.value
              })
            }}/> 
            </label>
          </label>
          
          <label>
            Estado<br/>
              <select name="estado" value={selectedState} onChange={handleStateChange}>
                <option disabled selected value="">Selecciona una opción</option>
                {Object.entries(estados).map(([value, label], index) => (
                  <option key={index} value={value}>{label}</option>
                ))}
              </select>
          </label>
        
          <label>
            Celular <br/>
            <input type="tel" name="celular"  onChange={( e ) => {
              setFormstate({
                ...formState,
                celular: e.target.value
              })
            }}/>
          </label>

        </div>

        <div className={Styles.columna}>
          <label>
            Colonia <br/>
            <input type="text" name="colonia" onChange={( e ) => {
              setFormstate({
                ...formState,
                colonia: e.target.value
              })
            }}/>
          </label>
          
          <label>
            Municipio <br/>
            <select name="municipio" value={selectedMunicipality} onChange={(event) => setFormstate({...formState, municipio: event.target.value})}>
              <option disabled selected value="">Selecciona una opción</option>
              {municipiosPorEstado[selectedState]?.map((municipio, index) => (
              <option key={index} value={municipio}>{municipio}</option>
              ))}
            </select>
          </label>

          <label>
            Correo<br/>
              <input type="email" name="mail"  onChange={( e ) => {
              setFormstate({
                ...formState,
                mail: e.target.value
              })
            }}/>
          </label>

        </div>

      </div>

      <h1 className={Styles.title}>Dependientes <button className={Styles.botonAgregar}>Agregar Dependiente</button> </h1>

      <h1 className={Styles.title}>Información del Empleo</h1>

      <div className={Styles.infoEmpleo}>
        
        <div className={Styles.columna}>

          <label>
            Tipo de Dependencia<br/>
            <select name="tipoDependencia"  onChange={( e ) => {
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
            Fecha de Ingreso a STSPE<br/>
            <input 
              type="date" 
              name="fechaIngreso"
              onChange={( e ) => {
                setFormstate({
                  ...formState,
                  fechaIngreso: e.target.value
                })
              }}
            />
          </label>

          <label>
            Puesto<br/>
            <select name="puesto"  onChange={( e ) => {
              setFormstate({
                ...formState,
                puesto: e.target.value
              })
            }}>
              <option disabled selected value="">Selecciona una opción</option>
              <option value="Empleado">Descentralizada</option>
              <option value="Empleado">Poder Ejecutivo</option>
              <option value="Empleado">Poder Judicial</option>
              <option value="Empleado">Poder Legislativo</option>
            </select>
          </label>

          <label>
            Region<br/>
            <select name="municipioQueretaro" value={selectedMunicipality} onChange={(event) => setFormstate({...formState, municipioQueretaro: event.target.value })}>
              <option disabled selected value="">Selecciona una opción</option>
              {municipiosPorEstado.queretaro.map((municipio, index) => (
              <option key={index} value={municipio}>{municipio}</option>
              ))}
            </select>
          </label> 

        </div>

        <div className={Styles.columna}>

          <label className={Styles.dependencia}>
            Dependencia<br/>
            <select name="dependencia" value={selectedDependency} onChange={handleDependencyChange}>
              <option disabled selected value="">Selecciona una opción</option>
              <option value="0">No Aplica</option>
              <option value="1">CEA</option>
              <option value="2">CEI</option>
              <option value="3">CENTRO DE CAPACITACION FORMACION E INVESTIGACION PARA LA SEGURIDAD DEL ESTADO DE QUERETARO</option>
              <option value="COBAQ">COBAQ</option>
              <option value="5">COLEGIO DE ESTUDIOS CIENTIFICOS Y TECNOLOGICOS DEL ESTADO</option>
              <option value="6">COMISION ESTATAL DEL SISTEMA PENITENCIARIO DE QUERETARO</option>
              <option value="CONALEP">CONALEP</option>
              <option value="8">DIRECCIÓN DE DESARROLLO INTEGRAL DE LA FAMILIA</option>
              <option value="9">DIRECCIÓN DEL REGISTRO PUBLICO DE LA PROPIEDAD</option>
              <option value="10">FISCALIA GENERAL DEL ESTADO</option>
              <option value="11">INSTITUTO DE CAPACITACION PARA EL TRABAJO DEL ESTADO DE QUERETARO</option>
              <option value="12">INSTITUTO DEL DEPORTE Y LA RECREACION DEL ESTADO DE QUERETARO</option>
              <option value="13">INSTITUTO QUERETANO DE LA MUJER</option>
              <option value="14">INSTITUTO QUERETANO DEL TRANSPORTE</option>
              <option value="15">JAPAM</option>
              <option value="16">TRIBUNAL DE CONCILIACION Y ARBITRAJE</option>
              <option value="17">TRIBUNAL DE JUSTICIA ADMINISTRATIVA DEL ESTADO DE QUERETARO</option>
              <option value="18">UTEQ</option>
              <option value="19">UTSJR</option>
              <option value="20">CASA QUERETANA DE LAS ARTESANÃAS</option>
              <option value="21">COLEGIO DE ESTUDIOS CIENTIFICOS Y TECNOLOGICOS DEL ESTADO
</option>
              <option value="22">COORDINACION DE COMUNICACIÓN SOCIAL
</option>
              <option value="23">DIRECCIÓN DE DESARROLLO INTEGRAL DE LA FAMILIA</option>
              <option value="24">DIRECCIÓN DEL REGISTRO PUBLICO DE LA PROPIEDAD</option>
              <option value="25">DIRECCIÓN GENERAL DEL REGISTRO CIVIL</option>
              <option value="26">ESCUELA NORMAL DEL ESTADO</option>
              <option value="27">ESCUELA NORMAL SUPERIOR DE QUERETARO</option>
              <option value="28">INSTITUTO DE CAPACITACION PARA EL TRABAJO DEL ESTADO DE QUERETARO</option>
              <option value="29">INSTITUTO DEL DEPORTE Y LA RECREACION DEL ESTADO DE QUERETARO</option>
              <option value="30">INSTITUTO QUERETANO DE LA CULTURA Y LAS ARTES</option>
              <option value="31">OFICIALÍA MAYOR</option>
              <option value="32">PROCURADURIA GENERAL DE JUSTICIA</option>
              <option value="33">SECRETARÍA DE CULTURA</option>
              <option value="34">SECRETARÍA DE DESARROLLO AGROPECUARIO</option>
              <option value="35">SECRETARÍA DE DESARROLLO SUSTENTABLE</option>
              <option value="36">SECRETARÍA DE DESARROLLO URBANO Y OBRAS PÚBLICAS</option>
              <option value="37">SECRETARÍA DE EDUCACIÓN</option>
              <option value="38">SECRETARÍA DE GOBIERNO</option>
              <option value="39">SECRETARÍA DE LA CONTRALORÍA</option>
              <option value="40">SECRETARÍA DE LA JUVENTUD</option>
              <option value="41">SECRETARÍA DE PLANEACIÓN Y FINANZAS</option>
              <option value="42">SECRETARÍA DE SALUD</option>
              <option value="43">SECRETARÍA DE SEGURIDAD CIUDADANA</option>
              <option value="44">SECRETARÍA DE TURISMO</option>
              <option value="45">SECRETARÍA DEL TRABAJO</option>
              <option value="46">SECRETARÍA DEL TRANSPORTE</option>
              <option value="47">SISTEMA ESTATAL DE COMUNICACION CULTURAL Y EDUCATIVA</option>
              <option value="48">CASA QUERETANA DE LAS ARTESANÍAS</option>
              <option value="49">COLEGIO DE ESTUDIOS CIENTIFICOS Y TECNOLOGICOS DEL ESTADO</option>
              <option value="50">COORDINACION DE COMUNICACIÓN SOCIAL</option>
              <option value="51">DIRECCIÓN DE DESARROLLO INTEGRAL DE LA FAMILIA</option>
              <option value="52">DIRECCIÓN DEL REGISTRO PUBLICO DE LA PROPIEDAD</option>
              <option value="53">DIRECCIÓN GENERAL DEL REGISTRO CIVIL</option>
              <option value="54">ESCUELA NORMAL DEL ESTADO</option>
              <option value="55">ESCUELA NORMAL SUPERIOR DE QUERETARO</option>
              <option value="56">INSTITUTO DE CAPACITACION PARA EL TRABAJO DEL ESTADO DE QUERETARO</option>
              <option value="57">INSTITUTO DEL DEPORTE Y LA RECREACION DEL ESTADO DE QUERETARO</option>
              <option value="58">INSTITUTO QUERETANO DE LA CULTURA Y LAS ARTES</option>
              <option value="59">OFICIALÍA MAYOR</option>
              <option value="60">PROCURADURIA GENERAL DE JUSTICIA</option>
              <option value="61">SECRETARÍA DE CULTURA</option>
              <option value="62">SECRETARÍA DE DESARROLLO AGROPECUARIO</option>
              <option value="63">SECRETARÍA DE DESARROLLO SUSTENTABLE</option>
              <option value="64">SECRETARÍA DE DESARROLLO URBANO Y OBRAS PÚBLICAS</option>
              <option value="65">SECRETARÍA DE EDUCACIÓN</option>
              <option value="66">SECRETARÍA DE GOBIERNO</option>
              <option value="67">SECRETARÍA DE LA CONTRALORÍA</option>
              <option value="68">SECRETARÍA DE LA JUVENTUD</option>
              <option value="69">SECRETARÍA DE PLANEACIÓN Y FINANZAS</option>
              <option value="70">SECRETARÍA DE SALUD</option>
              <option value="71">SECRETARÍA DE SEGURIDAD CIUDADANA</option>
              <option value="72">SECRETARÍA DE TURISMO</option>
              <option value="73">SECRETARÍA DEL TRABAJO</option>
              <option value="74">SECRETARÍA DEL TRANSPORTE</option>
              <option value="75">SISTEMA ESTATAL DE COMUNICACION CULTURAL Y EDUCATIVA</option>
            </select>
          </label>
          
          <label>
            Fecha de Solicitud<br/>
            <input 
              type="date" 
              name="fechaSolicitud"
            />
          </label>
        
          <label>
            Hora de Entrada <br/>
            <input type="time" name="horaEntrada"/>
          </label>
          
          <label>
            Estatus<br/>
            <select name="estatus">
              <option disabled selected value="">Selecciona una opción</option>
              <option value="activo">Activo</option>
              <option value="inactivo">Inactivo</option>
              <option value="licencia">Licencia</option>
              <option value="baja">Baja</option>
              <option value="expulsado">Expulsado</option>
            </select>
          </label>

        </div>

        <div className={Styles.columna}>
          
          <label>
            Plantel <br/>
            <select name="plantel" value={selectedPlantel} onChange={(event) => setSelectedPlantel(event.target.value)}>
              <option disabled selected value="">Selecciona una opción</option>
              {plantelesPorDependencia[selectedDependency]?.map((plantel, index) => (
                <option key={index} value={plantel}>{plantel}</option>
              ))}
            </select>
          </label>

          <label>
            Sueldo <br/>
            <input type="number" name="sueldo"/>
          </label>

          <label>
            Hora de Salida <br/>
            <input type="time" name="horaSalida"/>
          </label>

          <label className={Styles.empty}>
          </label>

        </div>

      </div>

      <input type="submit" value="Guardar Empleado"/>

    </form>
  )
}