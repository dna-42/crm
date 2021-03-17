 *WebApp de gerenciamento de negócio criado por [Sidney Foot](https://github.com/sidneyfoot) e [Dario Diniz](https://github.com/dariodinizg)*


## User History

### Autenticação

- O utilizador deve ser capaz de autenticar-se para poder acessar suas informações

### Clientes

Como usuário você poderá: 
- Guardar informações de seus clientes
- Visualizar uma relação de todos os clientes salvos
  - E realizar uma busca nesta relação
- Acessar uma página com as informações especificas de cada cliente.
- Através da página do cliente, o usuário poderá:
  - consultar a relação de pedidos que este cliente fez.
  - atualizar suas informações
  - excluir o registro do cliente
  - verificar histórico de pagamentos
  
### Produtos
  
Como usuário você poderá:
- Guardar informações de seus produtos
- Visualizar uma relação de todos os produtos salvos
  - E realizar uma busca nesta relação
- Acessar uma página com as informações especificas de cada produtos.
- Através da página do produtos, o usuário poderá:
  - atualizar suas informações
  - excluir o registro do produto
  
### Pedidos
Como usuário você poderá:
- Guardar informações de seus pedidos
- Visualizar uma relação de todos os pedidos feitos
  - E realizar uma busca nesta relação
- Acessar uma página com as informações especificas de cada pedido.
- Através da página do produtos, o usuário poderá:
  - atualizar suas informações
  - excluir o registro do pedido
  
### Dashboard

Como usuário você poderá:
- Acessar uma página inicial com informações relativas ao seu negócio. Tais como:
  - Pagamentos de pedidos pendentes
  - Balança comercial do mês
  - Recados/Lembretes 
  
 ### Opcionais
 - O sistema pode ser utilizado por multiplos usuários com logins diferentes
   - Os registros feitos pelo sistema recebem como autor o usuário logado no sistema
 - Adicionar paginação para páginas de clientes e produtos
 
  
## Banco de Dados

**CLIENTE****
_Nome_
_Sobrenome_
_CPF_
_Rua_
_Nº_
_Complemento_
_CEP_
_Chave Externa - Pedidos_

**KIT**
_Nome_
(_Qtdade do Produto_
_Chave Externa - Produtos_
_Valor Unitário do Produto_
)
_Preço_
_Categoria_

**PRODUTOS**
_Nome_
_Receita_
_Rendimento_
_Categoria_
_Preço MdO_ (Porcentagem sobre o custo)

**PEDIDOS**
_One-To-Many - Chave Externa - Kit_
_Forma de Pgto_
_Status de Pgto_

**RECEITAS**
_Nome_
_Rendimento_
(_Quantidade_
_Chave Externa - Ingredientes_)
_Preço Custo_ (Soma do custo dos ingredientes)


**INGREDIENTES**
_Nome_
_Unidade de Medida_ (Gramas, Kilos, etc)
_Preço por medida_
_Custo Frete_



**RELAÇÃO DO BANCO DE DADOS**
_Cliente 1 - n Pedidos_
_Pedido 1 - n Kits_
_Kit 1 - n Produtos_
_Produto 1 - n Receitas_
_Receita 1 - n  Ingredientes_
