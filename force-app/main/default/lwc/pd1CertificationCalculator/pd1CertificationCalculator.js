import { LightningElement } from 'lwc';
const passingScore =  68;
export default class Pd1CertificationCalculator extends LightningElement {
   
    devFundamentalsScore = 23;
    testDebugDeployScore = 22;
    processAutomationScore  = 30;
    userInterfaceScore  = 25;
   
    certificationscore = 0;
    numberOfExamQuestions = 60;

    attemptHistory = [];
    
    showResources = false;
    showGoodJob = false;

     currentHistoryId = 0;
    
     calculatescore(){
        let devfundamentalweight = this.devFundamentalsScore * 0.23;
        let processautomationweight = this.processAutomationScore * 0.3;
        let userinterfaceweight = this.userInterfaceScore * 0.25;
        let testdebugdeployweight = this.testDebugDeployScore * 0.22;
        this.certificationscore = Math.floor(devfundamentalweight  + processautomationweight  + userinterfaceweight + testdebugdeployweight);

        this.showResourcesTest();
        this.addAttemptHistory(this.certificationscore);
     }

     handleChange(event){
        const inputName = event.target.name;
        let value = Number(event.target.value);
        if(inputName === 'devFundamentals'){
            this.devFundamentalsScore  = value; 
        } else if(inputName === 'processAutomation'){
            this.processAutomationScore = value; 
        } else if(inputName === 'userInterface'){
            this.userInterfaceScore = value; 
        } else if(inputName === 'testDebugDeploy'){
            this.testDebugDeployScore = value; 
        }
    }

        showResourcesTest(){
            if(this.certificationscore < passingScore){
                this.showResources = true;
                
            } else{
                this.showResources = false;   
            }
            this.showGoodJob = !this.showResources;
           
        }
        
     addAttemptHistory(Score){
        this.currentHistoryId ++;
       const attempt={
            Id: this.currentHistoryId,
            Score
        }
       this.attemptHistory = [...this.attemptHistory, attempt];
    }
     
    deleteAttemptHandler(event){
        //console.log('this is fromparent to child',event.detail);
        let attemptId = event.detail;
        this.attemptHistory = this.attemptHistory.filter(attempt => attempt.Id != attemptId);
     } 

     connectedCallback(){
         this.currentHistoryId = 0;
     }
}