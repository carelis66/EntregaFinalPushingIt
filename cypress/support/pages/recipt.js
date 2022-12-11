export class Recipt{
    constructor(){
        this.thankYouButton = "//button[text()='Thank you']";
        this.cardNumber = "#creditCard";
        this.totalPrice = "#totalPrice";
        this.loading = "div[role='progressbar']";
       
    }
verifythankYouButton(){
    return cy.xpath(this.thankYouButton, { timeout: 10000});
}
verifyLoading(){
    return cy.get(this.loading);
}


verifyProducto(nombreProducto){

    cy.xpath(`//*[@id="${nombreProducto}"]`).should('have.text',`${nombreProducto}`);   
    
    
}
verifyCardNumber(){
    return cy.get(this.cardNumber);
}

verifyAmountTotal(total){
        return cy.get(this.totalPrice).invoke("text").then(() => {
        cy.contains(total);
    });
}

}

