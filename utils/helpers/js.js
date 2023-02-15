export const ChangeObjectByInstruction = (obj, path, val) => {
    const keys = path.split('.');
    const lastKey = keys.pop();
    const lastObj = keys.reduce((obj, key) => (obj[key] = obj[key] || {}), obj);
    lastObj[lastKey] = val;

    return obj
  };


  export const GetObjectTreeByInstruction = (object = {}, instruction = '') => {
    const steps = instruction.split('.');
    const hasMoreThanOneStep = steps.length > 1;
  
    let currentLayer = object;
  
    if (!hasMoreThanOneStep) {
      return [instruction, currentLayer];
    }
  
    steps.forEach((step) => {
      if (currentLayer[step] !== 'undefined' || currentLayer[step] !== 'null') {
        currentLayer = currentLayer[step];
      }
    });
  
    return currentLayer;
  };