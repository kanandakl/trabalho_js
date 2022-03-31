//Questão 1

var  numUm  =  7 ;

if ( numUm  > 10 ) {
    documento . escreva ( "É MAIOR QUE 10!" )
} senão {
    documento . escreva ( "É MENOR QUE 10!<br>" )
}

//Questão 2

var  bimestre  =  10 ;
       var  bimestredois  =  8 ;
       var  bimestretres  =  5 ;
       var  bimestrequatro  =  4 ;
       var  totaladicao  =  bimestre  +  bimestredois  +  bimestretres  +  bimestrequatro  ;
       var  totaldivisao  =  totaladicao  /  5  ;

         consola . log ( totaladicao ) ;
         consola . log ( totaldivisao ) ;
         documento . escreva ( "a média final é:"  +  totaldivisao ) ;

    var  nota  =  6.0 ;
      if ( nota  >=  6 ) {
         documento . write ( " <br> situação : aluno aprovado " ;
    }  else  if ( ( nota  <  6 )  &&  ( nota  >=  6 ) )  {
         documento . write ( " <br> situação: aluno de recuperação" ) ;
    }  senão  {
         documento . escreva ( " <br> situação : aluno reprovado " ) ;
 }

//Questão 3

deixe  empregado  =  [ 1 ,  2 ,  3 ,  4 ]
deixe  anoNasc  =  1982 ;
deixe  anoAtual  =  2022 ;
let  idade  =  anoAtual  -  anoNasc ;
let  tempTrabalho  =  idade  -  30 ;
if ( idade  >= 40  &&  tempTrabalho  >=  22 ) {
    documento . escreva ( "<br>Empregado: " +  empregado [ 3 ]  +  "<br>Idade: "  +  idade  +  " anos. <br> Ingressou na empresa á: "  +  tempTrabalho  +  " anos <br>Requer aposentadoria" )
    

} else  if  ( idade >= 65 || tempTrabalho  >= 30 ) {     
    documento . escreva ( "<br>Empregado: " +  empregado [ 2 ]  +  "<br>Idade: "  +  idade  +  " anos. <br> Ingressou na empresa á: "  +  tempTrabalho  +  " anos <br>Requer aposentadoria" )
}

senão  {
    documento . escreva ( "<br>Empregado: " +  empregado [ 1 ]  +  "<br>Idade:"   +  idade  +  " anos. <br> Ingressou na empresa á: "  +  tempTrabalho  +  " anos <br>Não requer reembolso" )
}

//Questão 4

let  nomeProduto  =  "Perfume" ;
    deixe  quantidade  =  2 ;
    deixe  preço  =  120,00 ;
    deixe  totalpreço  =  quantidade  *  preço ;
    deixe  = [ 2 , 3 , 5 ] _    

    if  ( quantidade  <=  5 )  {
        deixe  por cento  =  ( [ 0 ] * preço total ) / 100 ;    
        let  desc  =  totalpreço  -  porcent ;

        documento . escreva ( nomeProduto  +  "<br>Quantidade: "  +  quantidade  +  "<br>Preço: "  +  preço  +  " R$<br>Preço Total: "  +  totalpreço  +  " R$ <br>Desconto a ser aplicado: "  +  [ 0 ] + " % <br>Preço Com Desconto: " + desc + "R$" )      

    }  else  if  ( quantidade  >  5  &&  quantidade  <=  10 )  {

        deixe  por cento  =  ( [ 1 ] * preço total ) / 100 ;    
        let  desc  =  totalpreço  -  porcent ;

        documento . escreva ( nome + "<br> quantidade + "<br>Preço: " + preço + " R <br>Preço Total: " + totalpreço  + "<br>Desconto a ser aplicado: " + Produto $ [ 1 ] + "% <br>Preço Com Desconto: " + desc )                   


    }  else  if  ( quantidade  >  10 )  {
        deixe  por cento  =  ( [ 2 ] * preço total ) / 100 ;    
        let  desc  =  totalpreço  -  porcent ;

        documento . escreva ( nome + "<br> quantidade + "<br>Preço: " + preço + " R <br>Preço Total: " + totalpreço  + "<br>Desconto a ser aplicado: " + Produto $ [ 2 ] + "% <br>Preço Com Desconto: " + desc )                   

    }

//Questão 5

deixe  código  =  1 ;


             if  ( código  ==  1 )  {
                documento . escreva ( "Código selecionado: "  +  codigo  +  "<br>Perfume " )
            }  else  if  ( código  >=  2  &&  código  <=  4 )  {
                documento . escreva ( "Código selecionado: "  +  codigo  +  "<br>Shampoo" )
            }  else  if  ( código  >=  5  &&  código  <=  6 )  {
                documento . escreva ( "Código selecionado: "  +  codigo  +  "<br>Condicionador" )
            }  else  if  ( código  ==  7 )  {
                documento . escreva ( "Código selecionado: "  +  codigo  +  "<br>Desodoramte" )
            }  else  if  ( código  >=  8  &&  código  <=  15 )  {
                documento . escreva ( "Código selecionado: "  +  codigo  +  "<br>Pente" )
            }  senão  {
                documento . escreva ( "Código Inválido" )

            }

//Questão 6

deixe  código  =  102
        deixe  quant  =  2

        interruptor  ( código )  {
            caso  100 :
                deixe  cQuente  =  quant  *  1,70
                documento . escreva ( "O preço final do Cachorro Quente vai ser "  +  cQuente  +  " R$ " )
                quebrar ;
            caso  101 :
                deixe  bSimples  =  quant  *  2,30
                documento . write ( "O preço final do Bauru Simples vai ser "  +  bSimples  +  " R$ " )
                quebrar ;

            caso  102 :
                deixe  bComOvo  =  quant  *  2,60
                documento . escreva ( "O preço final do Bauru Com Ovo vai ser "  +  bComOvo  +  " R$ " )
                quebrar ;

            caso  103 :
                deixe  hamb  =  quant  *  2,40
                documento . escreva ( "O preço final do Hamburguer vai ser "  +  hamb  +  " R$ " )
                quebrar ;

            caso  104 :
                deixe  cheeseb  =  quant  *  2,50
                documento . escreva ( "O preço final do Cheeseburguer vai ser "  +  cheeseb  +  " R$ " )
                quebrar ;

            caso  105 :
                deixe  ref  =  quant  *  1,00
                documento . escreva ( "O preço final do Refrigerante vai ser "  +  refri  +  " R$ " )
                quebrar ;
        }

//Questão 7

var  número  =  101
     while  ( num  <=  110 ) {
         documento . escreva ( num )
         documento . escreva ( ", " )
         número ++
     }

//Questão 8

deixe  num  =  15
      for  ( seja  n  =  1 ;  n  <=  num  &&  num  >=  0 ;  n ++ )  {
          documento . escreva ( n  +  ", " ) ;

      }

//Questão 9

tabuada ( ) ;

     função  tabuada ( )  {

       for  ( var  contagem  =  1  ;  contagem  <=  10  ;  contagem  ++ )

         documento . escreva ( " 5 x "  +  contagem  +  " = "  +  (  10  *  contagem )  +  "<br/>"  ) ;
    }

//Questão 10

documento . escreva ( "Crescente:" ) ;
for  ( let  número  =  1 ;  número  <=  10 ;  número ++ )  {
    documento . escreva ( número  + ", " ) ;
    

}
documento . escreva ( "<br>" ) ;
documento . escrever ( "Decrescente:" ) ;
for  ( deixe  numero2  =  10 ;  numero2  >=  1 ;  numero2 -- )  {
    documento . escreva ( número2  +  ", " )
}