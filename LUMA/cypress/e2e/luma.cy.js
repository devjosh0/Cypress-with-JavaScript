///<reference types="Cypress"/>

import lumaObject from "./luma-class.cy"

it("",()=>{
    const luma = new lumaObject()
    luma.visit()
    //luma.createAccount("huss","amah","www.husseinamadu634@gmail.com","josh@"+123,"josh@"+123)
    luma.signIn("www.husseinamadu634@gmail.com","josh@"+123)
    //luma.forgetPassword("www.husseinamadu634@gmail.com")
    //luma.addTOcart()
    //luma.updatesCarts(1)
   //luma.viewCart()
   //deleteItemsinCarts()
})