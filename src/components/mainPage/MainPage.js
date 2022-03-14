import React, { useState } from 'react';
import { 
    Box, 
    Paper,
    List,
    ListItemButton,
    ListItemText
} from '@mui/material';


function MainPageMenu() {
  return (
    <div className="container-main-page">
      <Box className="box-fiware-info">
        <Paper elevation={3} className="fiware-content">
          <div>
            <h1>Fiware Context Brocker</h1>
          </div>
          <div>
            <h3>
              Ejemplo de Perseo Context Complex Event Processing: (CON FIWARE-SERVICE)<br /> 
              NOTA IMPORTANTE: Tras diversas pruebas realizadas, 
              es indispensable tener un valor en FIWARE-SERVICE, 
              si esta vacio no se emitirán las alertas. Este paraemtro 
              esta en el fichero de configuración 
              cofig.jsdel modulo perseo-fe: config.DEFAULT_SUBSERVICE = '/'; 
              config.DEFAULT_SERVICE = 'gtc'; Por defecto podemos usar 
              fiware-service=gtc y en fiware-servicePath que es el 
              subservicio ponemos la raiz de forma general '= /'.
            </h3>
          </div>
          <Paper elevation={3} className="fiware-content-code">
            <p className="fiware-content-code-text">
              <span className="code-sniped-white">curl </span>
              <span className="code-sniped-darkwhite">localhost<b className="code-sniped-white">:</b>1026/v2/entities </span>
              <span className="code-sniped-lightred">-s -S -H </span>
              <span className="code-sniped-lightgreen">'Content-Type<b className="code-sniped-white">:</b> application/json' </span>
              <span className="code-sniped-lightred">-H </span>
              <span className="code-sniped-lightgreen">'fiware-service<b className="code-sniped-white">:</b> gtc' </span>
              <span className="code-sniped-lightred">-H </span>
              <span className="code-sniped-lightgreen">'fiware-servicePath<b className="code-sniped-white">:</b> /' </span>
              <span className="code-sniped-lightred">-d @- </span>
              <span className="code-sniped-yellow">{"<<EOF"} </span> <br />
              <span className="code-sniped-purple">{"{"} </span><br />
              <span className="code-sniped-lightgreen asideObject">'id'<b className="code-sniped-white">:</b> 'bloodm1' </span>
              <span className="code-sniped-white"><b>,</b> </span> <br />
              <span className="code-sniped-lightgreen asideObject">'type'<b className="code-sniped-white">:</b> 'BloodMeter' </span>
              <span className="code-sniped-white"><b>,</b> </span> <br />
              <span className="code-sniped-lightgreen asideObject">'BloodPressure'<b className="code-sniped-white">:</b> </span> <br />
              <span className="code-sniped-purple asideObject">{"{"} </span> <br />
              <span className="code-sniped-lightgreen asideObjectInside">'value'<b className="code-sniped-white">:</b> <span className="code-sniped-white">0</span> </span>
              <span className="code-sniped-white"><b>,</b> </span> <br />
              <span className="code-sniped-lightgreen asideObjectInside">'type'<b className="code-sniped-white">:</b> 'Float' </span> <br />
              <span className="code-sniped-purple asideObject">{"}"} </span> <br />
              <span className="code-sniped-purple">{"}"} </span> <br />
              <span className="code-sniped-yellow">EOF</span>
            </p>
          </Paper>
          <div>
            <h3>Por defecto se coge servicePath = "/", por lo que lo siguiente es equivalente:</h3>
          </div>
          <Paper elevation={3} className="fiware-content-code">
            <p className="fiware-content-code-text">
              <span className="code-sniped-white">curl </span>
              <span className="code-sniped-darkwhite">localhost<b className="code-sniped-white">:</b>1026/v2/entities </span>
              <span className="code-sniped-lightred">-s -S -H </span>
              <span className="code-sniped-lightgreen">'Content-Type<b className="code-sniped-white">:</b> application/json' </span>
              <span className="code-sniped-lightred">-H </span>
              <span className="code-sniped-lightgreen">'fiware-service<b className="code-sniped-white">:</b> gtc' </span>
              <span className="code-sniped-lightred">-d @- </span>
              <span className="code-sniped-yellow">{"<<EOF"} </span> <br />
              <span className="code-sniped-purple">{"{"} </span><br />
              <span className="code-sniped-lightgreen asideObject">'id'<b className="code-sniped-white">:</b> 'bloodm1' </span>
              <span className="code-sniped-white"><b>,</b> </span> <br />
              <span className="code-sniped-lightgreen asideObject">'type'<b className="code-sniped-white">:</b> 'BloodMeter' </span>
              <span className="code-sniped-white"><b>,</b> </span> <br />
              <span className="code-sniped-lightgreen asideObject">'BloodPressure'<b className="code-sniped-white">:</b> </span> <br />
              <span className="code-sniped-purple asideObject">{"{"} </span> <br />
              <span className="code-sniped-lightgreen asideObjectInside">'value'<b className="code-sniped-white">:</b> <span className="code-sniped-white">0</span> </span>
              <span className="code-sniped-white"><b>,</b> </span> <br />
              <span className="code-sniped-lightgreen asideObjectInside">'type'<b className="code-sniped-white">:</b> 'Float' </span> <br />
              <span className="code-sniped-purple asideObject">{"}"} </span> <br />
              <span className="code-sniped-purple">{"}"} </span> <br />
              <span className="code-sniped-yellow">EOF</span>
            </p>
          </Paper>
        </Paper>

        <Paper elevation={3} className="fiware-content">
          <div>
            <h3>Consultar entidad con fiware-service y path</h3>
          </div>
          <Paper elevation={3} className="fiware-content-code">
            <p className="fiware-content-code-text">
              <span className="code-sniped-white">curl </span>
              <span className="code-sniped-darkwhite">localhost<b className="code-sniped-white">:</b>1026/v2/entities </span>
              <span className="code-sniped-lightred">-s -S -H </span>
              <span className="code-sniped-lightgreen">'Accept<b className="code-sniped-white">:</b> application/json' </span>
              <span className="code-sniped-lightred">-H </span>
              <span className="code-sniped-lightgreen">'fiware-service<b className="code-sniped-white">:</b> gtc' </span>
              <span className="code-sniped-lightred">-H </span>
              <span className="code-sniped-lightgreen">'fiware-servicePath<b className="code-sniped-white">:</b> /' </span>
              <span className="code-sniped-purple"><b>{"|"}</b> </span>
              <span className="code-sniped-yellow">python3  </span>
              <span className="code-sniped-white"><b>-mjson.tool</b> </span>
            </p>
          </Paper>
          <div>
            <h3>Y si quieres consultar todos los elementos en diferentes servicePath: (le ponemos /#)</h3>
          </div>
          <Paper elevation={3} className="fiware-content-code">
            <p className="fiware-content-code-text">
              <span className="code-sniped-white">curl </span>
              <span className="code-sniped-darkwhite">localhost<b className="code-sniped-white">:</b>1026/v2/entities </span>
              <span className="code-sniped-lightred">-s -S -H </span>
              <span className="code-sniped-lightgreen">'Accept<b className="code-sniped-white">:</b> application/json' </span>
              <span className="code-sniped-lightred">-H </span>
              <span className="code-sniped-lightgreen">'fiware-service<b className="code-sniped-white">:</b> gtc' </span>
              <span className="code-sniped-lightred">-H </span>
              <span className="code-sniped-lightgreen">'fiware-servicePath<b className="code-sniped-white">:</b> /#' </span>
              <span className="code-sniped-purple"><b>{"|"}</b> </span>
              <span className="code-sniped-yellow">python3  </span>
              <span className="code-sniped-white"><b>-mjson.tool</b> </span>
            </p>
          </Paper>
        </Paper>
        <Paper elevation={3} className="fiware-content">
          <div>
            <h1>Perseo Core</h1>
          </div>
          <div>
            <h3>To check that Perseo Core has been instantiated properly you can run:</h3>
          </div>
          <Paper elevation={3} className="fiware-content-code">
            <p className="fiware-content-code-text">
              <span className="code-sniped-white">curl </span>
              <span className="code-sniped-darkwhite">localhost<b className="code-sniped-white">:</b>8080/perseo-core/version </span>
            </p>
          </Paper>
          <div>
            <h3>subscribe perseo (CEP) to Orion (Content Broker) for changes on “bloodPressure” for entities of type “BloodMeter”</h3>
          </div>
          <Paper elevation={3} className="fiware-content-code">
            <p className="fiware-content-code-text">
              <span className="code-sniped-white">curl </span>
              <span className="code-sniped-lightred">-v </span>
              <span className="code-sniped-darkwhite">localhost<b className="code-sniped-white">:</b>1026/v2/subscriptions  </span>
              <span className="code-sniped-lightred">-s -S -H </span>
              <span className="code-sniped-lightgreen">'Content-Type<b className="code-sniped-white">:</b> application/json' </span>
              <span className="code-sniped-lightred">-H </span>
              <span className="code-sniped-lightgreen">'fiware-service<b className="code-sniped-white">:</b> gtc' </span>
              <span className="code-sniped-lightred">-d @- </span>
              <span className="code-sniped-yellow">{"<<EOF"} </span> <br />
              <span className="code-sniped-purple">{"{"} </span><br />
              <span className="code-sniped-lightgreen asideObject">'description'<b className="code-sniped-white">:</b> 'Subscription to feed the CEP' </span>
              <span className="code-sniped-white"><b>,</b> </span> <br />
              <span className="code-sniped-lightgreen asideObject">'subject'<b className="code-sniped-white">:</b> </span> <br />
              <span className="code-sniped-purple asideObject">{"{"} </span> <br />
              <span className="code-sniped-lightgreen asideObjectInside">'entities'<b className="code-sniped-white">:</b> </span> <br />
              <span className="code-sniped-purple asideObjectInside">{"[{"} </span> <br />
              <span className="code-sniped-lightgreen asideObjectInsideDouble">'idPattern'<b className="code-sniped-white">:</b> '.*' </span>
              <span className="code-sniped-white"><b>,</b> </span> <br />
              <span className="code-sniped-lightgreen asideObjectInsideDouble">'type'<b className="code-sniped-white">:</b> 'BloodMeter' </span> <br />
              <span className="code-sniped-purple asideObjectInside">{"}]"} </span> <br />
              <span className="code-sniped-lightgreen asideObjectInside">'condition'<b className="code-sniped-white">:</b> </span> <br />
              <span className="code-sniped-purple asideObjectInside">{"{"} </span> <br />
              <span className="code-sniped-lightgreen asideObjectInsideDouble">'attrs'<b className="code-sniped-white">:</b> <b className="code-sniped-white">[]</b> </span> <br />
              <span className="code-sniped-purple asideObjectInside">{"}"} </span> <br />
              <span className="code-sniped-purple asideObject">{"}"} </span> <br />
              <span className="code-sniped-lightgreen asideObject">'notification'<b className="code-sniped-white">:</b> </span> <br />
              <span className="code-sniped-purple asideObject">{"{"} </span> <br />
              <span className="code-sniped-lightgreen asideObjectInside">'http'<b className="code-sniped-white">:</b> </span> <br />
              <span className="code-sniped-purple asideObjectInside">{"{"} </span> <br />
              <span className="code-sniped-lightgreen asideObjectInsideDouble">'url'<b className="code-sniped-white">:</b> 'http://perseo-fe:9090/notices' </span><br />
              <span className="code-sniped-purple asideObjectInside">{"}"} </span> <br />
              <span className="code-sniped-lightgreen asideObjectInside">'attrs'<b className="code-sniped-white">:</b>  <b className="code-sniped-white">[</b> 'BloodPressure' <b className="code-sniped-white">]</b> </span><br />
              <span className="code-sniped-purple asideObject">{"}"} </span> <br />
              <span className="code-sniped-purple">{"}"} </span> <br />
              <span className="code-sniped-yellow">EOF</span>
            </p>
          </Paper>
        </Paper>
      </Box>
      <List
        sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        className="scroll-highLight-menu"
      >
        <ListItemButton className="scroll-highLight-ItemButton">
          <ListItemText primary="Content" />
        </ListItemButton>
        <ListItemButton className="scroll-highLight-ItemButton">
          <ListItemText primary="Drafts" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }} className="scroll-highLight-ItemButton">
          <ListItemText primary="Drafts" />
        </ListItemButton>
        <ListItemButton className="scroll-highLight-ItemButton">
          <ListItemText primary="Drafts" />
        </ListItemButton>
      </List>
    </div>
  );
}

export default MainPageMenu;
