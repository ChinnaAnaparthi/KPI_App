const express = require("express");
const Server_Logic = require('./ServerLogic')
const app = express();
var parser = require("body-parser");
app.use(parser.json());
const cors = require("cors");
app.use(cors());
const port = 2010;


//Admin-Data
app.post("/AdminRegistrationKPI", (req, res, next) => {
  Server_Logic.AdminPost(req, res, () => { });
})
app.post("/AdminLoginKPI", (req, res, next) => {
  Server_Logic.AdminloginPost(req, res, () => { });
})
app.post("/AdminEmployeePost", (req, res, next) => {
  Server_Logic.Admin_Employee_Insert_Data(req, res, () => { }); 
})
app.get("/AdminEmployeeGet", (req, res, next) => {
  Server_Logic.Admin_Employee_Retrive_Data(req, res, () => { }); 
})
app.delete("/AdminEmployeeDelete/:adminID/:category?/:name?/:questions?", (req, res, next) => {
  Server_Logic.Admin_Employee_Delete_Data(req, res, () => { });
});

app.post("/AdminManagerPost", (req, res, next) => {
  Server_Logic.Admin_Manager_Insert_Data(req, res, () => { }); 
})
app.get("/AdminManagerGet", (req, res, next) => {
  Server_Logic.Admin_Manager_Retrive_Data(req, res, () => { }); 
})
app.delete("/AdminManagerDelete/:adminID/:category?/:name?/:questions?", (req, res, next) => {
  Server_Logic.Admin_Manager_Data_Delete(req, res, () => { });
});

app.post("/AdminDirectorPost", (req, res, next) => {
  Server_Logic.Admin_Director_Insert_Data(req, res, () => { }); 
})
app.get("/AdminDirectorGet", (req, res, next) => {
  Server_Logic.Admin_Director_Retrive_Data(req, res, () => { }); 
})
app.delete("/AdminDirectorDelete/:adminID/:category?/:name?/:questions?", (req, res, next) => {
  Server_Logic.Admin_Director_Data_Delete(req, res, () => { });
});
//Save-Data
app.post("/SaveEmpoyeeDataKPIPost", (req, res, next) => {
  Server_Logic.Save_Employee_Insert_Data(req, res, () => { });
});
app.get("/SaveEmpoyeeDataKPIGet/:Empid?/:Value?/:Name?", (req, res, next) => {
  Server_Logic.Save_Employee_Retrive_Data(req, res, () => { });
});
app.put("/SaveEmpoyeeDataKPIUpdate/:Empid", (req, res, next) => {
  Server_Logic.Save_Employee_Data_Update(req, res, () => { });
});
app.delete("/SaveEmpoyeeDataKPIDelete/:Empid", (req, res, next) => {
  Server_Logic.Save_Employee_Data_Delete(req, res, () => { });
});
app.post("/SaveManagerDataKPIPost", (req, res, next) => { 
  Server_Logic.Save_Manager_Insert_Data(req, res, () => { }); 
});
app.get("/SaveManagerDataKPIGet/:Empid?/:Value?/:Name?", (req, res, next) => {
  Server_Logic.Save_Manager_Retrive_Data(req, res, () => { });
});
app.put("/SaveManagerDataKPIUpdate/:Empid", (req, res, next) => {
  Server_Logic.Save_Manager_Data_Update(req, res, () => { });
});
app.delete("/SaveManagerDataKPIDelete/:Empid", (req, res, next) => {
  Server_Logic.Save_Manager_Data_Delete(req, res, () => { });
});
app.post("/SaveDirectorDataKPIPost", (req, res, next) => { 
  Server_Logic.Save_Director_Insert_Data(req, res, () => { }); 
});
app.get("/SaveDirectorDataKPIGet/:Empid?/:Value?/:Name?", (req, res, next) => {
  Server_Logic.Save_Director_Retrive_Data(req, res, () => { });
});
app.put("/SaveDirectorDataKPIUpdate/:Empid", (req, res, next) => {
  Server_Logic.Save_Director_Update_Data(req, res, () => { });
});
app.delete("/SaveDirectorDataKPIDelete/:Empid", (req, res, next) => {
  Server_Logic.Save_Director_Delete_Data(req, res, () => { });
});
//Employee-Data
app.post("/EmpoyeeDataKPIPost", (req, res, next) => {
  Server_Logic.Employee_Insert_Data(req, res, () => { });
});
app.get("/EmployeeDataKPIGet/:Empid/:Value?/:Name?", (req, res, next) => {
  Server_Logic.Employee_Retrive_Data(req, res, () => { });
});
app.put("/EmployeeDataKPIUpdate/:Empid/:Value?/:Name?", (req, res, next) => {
  Server_Logic.Employee_Data_Update(req, res, () => { });
});
app.get("/EmployeeAllDataKPIGet/:Empid?/:Value?/:Name?", (req, res, next) => {
  Server_Logic.Employee_All_Data_Retrieve(req, res, () => { });
});
app.put("/EmployeeStatusUpdate/:Empid", (req, res, next) => {
  Server_Logic.Employee_Status_Update(req, res, () => { });
});
app.get("/EmployeeAllStatusKPIGet/:Empid?", (req, res, next) => {
  Server_Logic.Employee_All_Status_Retrieve(req, res, () => { });
});

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body); 
    let result;

    if (event.path === '/AdminRegistrationKPI' && event.httpMethod === 'POST') {
      result =  Server_Logic.AdminPost(body);
    } else if (event.path === '/AdminLoginKPI' && event.httpMethod === 'POST') {
      result =  Server_Logic.AdminloginPost(body);
    }else if (event.path === '/AdminEmployeePost' && event.httpMethod === 'POST') {
      result =  Server_Logic.Admin_Employee_Insert_Data(body);
    } else if (event.path === '/AdminEmployeeGet' && event.httpMethod === 'GET') {
      result =  Server_Logic.Admin_Employee_Retrive_Data(body);
    }else if (event.path === '/AdminEmployeeDelete/:adminID/:category?/:name?/:questions?' && event.httpMethod === 'DELETE') {
      result =  Server_Logic.Admin_Employee_Delete_Data(body);
    }else if (event.path === '/AdminManagerPost' && event.httpMethod === 'POST') {
      result =  Server_Logic.Admin_Manager_Insert_Data(body);
    }else if (event.path === '/AdminManagerGet' && event.httpMethod === 'GET') {
      result =  Server_Logic.Admin_Manager_Retrive_Data(body);
    }else if (event.path === '/AdminManagerDelete/:adminID/:category?/:name?/:questions?' && event.httpMethod === 'DELETE') {
      result =  Server_Logic.Admin_Manager_Data_Delete(body);
    }else if (event.path === '/SaveEmpoyeeDataKPIPost' && event.httpMethod === 'POST') {
      result =  Server_Logic.Save_Employee_Insert_Data(body);
    }else if (event.path === '/SaveEmpoyeeDataKPIGet/:Empid?/:Value?/:Name?' && event.httpMethod === 'GET') {
      result =  Server_Logic.Save_Employee_Retrive_Data(body);
    }else if (event.path === '/SaveEmpoyeeDataKPIUpdate/:Empid' && event.httpMethod === 'UPDATE') {
      result =  Server_Logic.Save_Employee_Data_Update(body);
    }else if (event.path === '/SaveEmpoyeeDataKPIDelete/:Empid' && event.httpMethod === 'DELETE') {
      result =  Server_Logic.Save_Employee_Data_Delete(body);
    }else if (event.path === '/SaveManagerDataKPIPost' && event.httpMethod === 'POST') {
      result =  Server_Logic.Save_Manager_Insert_Data(body);
    }else if (event.path === '/SaveManagerDataKPIGet/:Empid?/:Value?/:Name?' && event.httpMethod === 'GET') {
      result =  Server_Logic.Save_Manager_Retrive_Data(body);
    }else if (event.path === '/SaveManagerDataKPIUpdate/:Empid' && event.httpMethod === 'UPDATE') {
      result =  Server_Logic.Save_Manager_Data_Update(body);
    }else if (event.path === '/SaveManagerDataKPIDelete/:Empid' && event.httpMethod === 'DELETE') {
      result =  Server_Logic.Save_Manager_Data_Delete(body);
    }
    else {
      throw new Error('Invalid endpoint');
    }

    return {
      statusCode: 200,
      body: JSON.stringify(result),
      headers: {
        'Content-Type': 'application/json',
        // CORS headers to allow requests from any origin
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET, PUT, DELETE', // Include the necessary HTTP methods
      },
    };
  } catch (error) {
    console.error('Error handling Lambda event:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
      headers: {
        'Content-Type': 'application/json',
        // CORS headers to allow requests from any origin
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET, PUT, DELETE', // Include the necessary HTTP methods
      },
    };
  }
}

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
