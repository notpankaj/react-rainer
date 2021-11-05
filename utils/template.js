const STR_FUN = ({ name }) => {
  return `import React from "react";

function ${name}() {
    return <> </>
}
    
export default ${name}
`;
};
const STR_CLASS = ({ name }) => {
  return `import React from "react";

class ${name} extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return <> </>;
  }
}
  
export default ${name};
  `;
};
const STR_FUN_WITH_STYLE = ({ name, stylesheet }) => {
  return `import React from "react";
import "./${name.toLowerCase()}.${stylesheet}";

function ${name}() {
    return <> </>;
}
    
export default ${name}
    `;
};
const STR_CLASS_WITH_STYLE = ({ name, stylesheet }) => {
  return `import React from "react";
import './${name.toLowerCase()}.${stylesheet}'
  
class ${name} extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return <> </>;
  }
}
  
export default ${name};
  `;
};
const STR_FUN_RESOURCE_WITH_STYLE = ({ name, stylesheet }) => {
  return `import React, { useState, useEffect } from "react";
import "./${name.toLowerCase()}.${stylesheet}";
  
function ${name}() {
  const [state, setState] = useState(false);
        
  useEffect(() => {
    return () => {}
  }, []);
    
  return <> </>;
  }
    
export default ${name};
    `;
};
const STR_CLASS_RESOURCE_WITH_STYLE = ({ name, stylesheet }) => {
  return `import React from "react";
import "./${name.toLowerCase()}.${stylesheet}";
  
class ${name} extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }
  
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {}
  componentWillUnmount() {}
  
  render() {
    return <></>;
  }
}
  
export default ${name};
  `;
};
const STR_FUN_RESOURCE = ({ name }) => {
  return `import React, { useState, useEffect } from "react";

function ${name}() {
  const [state, setState] = useState(false);
      
  useEffect(() => {
    return () => {}
  }, []);
  
  return <> </>;
  }
  
export default ${name};
  `;
};
const STR_CLASS_RESOURCE = ({ name }) => {
  return `import React from "react";
  
class ${name} extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }
  
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {}
  componentWillUnmount() {}
  
  render() {
    return <></>;
  }
}
  
export default ${name};
  `;
};

module.exports = {
  STR_FUN,
  STR_CLASS,
  STR_FUN_WITH_STYLE,
  STR_CLASS_WITH_STYLE,
  STR_FUN_RESOURCE_WITH_STYLE,
  STR_CLASS_RESOURCE_WITH_STYLE,
  STR_FUN_RESOURCE,
  STR_CLASS_RESOURCE,
};
