type Operation = 'mul' | 'add' | 'div' | 'sub';
const calculator = ( a:number,b:number,op: Operation ):number | string => {
    switch (op) {
        case 'mul':
            return a * b
        case 'add':
            return a + b
        case 'div':
            if(b===0) throw new Error('can\'t divide by 0!');
            
            return a / b
        case 'sub':
            return a - b
        default:
            throw new Error('Operation is not multiply, add, sub or divide!');
    }
}

try {
  console.log(calculator(1, 5 , 'div'));
} catch (error: unknown) {
  let errorMessage = 'Something went wrong: '
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}