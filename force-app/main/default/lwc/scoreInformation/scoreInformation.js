import { api, LightningElement } from 'lwc';

export default class ScoreInformation extends LightningElement {
  @api score;
  @api attemptId;
  @api numberOfExamQuestions

  get numberOfCorrectQuestions(){
    return Math.floor((this.score/100) * this.numberOfExamQuestions);
  }

  get numberOfIncorrectQuestions(){
    return this.numberOfExamQuestions - this.numberOfCorrectQuestions
  }
  
  handleDeleteAttempt(){
    //console.log('handledeleteattempt', this.attemptId);
    const deleteEvent = new CustomEvent('deleteattempt',{
        detail: this.attemptId
    });
    this.dispatchEvent(deleteEvent);
  }

 

}