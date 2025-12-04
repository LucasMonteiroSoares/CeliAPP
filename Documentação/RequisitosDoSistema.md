# Requisitos Funcionais

| Código | Requisito Funcional                       | Descrição                                                                                     |
|--------|--------------------------------------------|-------------------------------------------------------------------------------------------------|
| RF01   | Exibir mapa com estabelecimentos GF        | O sistema deve disponibilizar uma aba com mapa que mostra restaurantes e locais seguros para celíacos. |
| RF02   | Geolocalização do usuário                  | O sistema deve obter a localização atual do usuário (com permissão) para exibir lugares próximos. |
| RF03   | Listagem de estabelecimentos               | O sistema deve permitir visualizar uma lista de estabelecimentos encontrados no mapa.           |
| RF04   | Buscar estabelecimentos                    | O usuário deve conseguir pesquisar estabelecimentos por nome, tipo, cidade ou palavra-chave.    |
| RF05   | Exibir perfil detalhado do estabelecimento | Ao clicar em um local, deve ser exibido um perfil com cardápio, preços, avaliações, fotos e se há delivery. |
| RF06   | Avaliação de estabelecimentos              | O usuário deve poder registrar opiniões e notas sobre um estabelecimento.                       |
| RF07   | Exibir produtos e sites seguros            | O sistema deve permitir buscar produtos específicos e listar sites confiáveis para compra de alimentos GF. |
| RF08   | Exibir perfil de produtos                  | Ao clicar em um produto ou site, deve abrir um perfil com informações essenciais (marca, preço, link). |
| RF09   | Aba de notícias (NEWS)                     | O app deve incluir uma aba com três categorias: “Informações Gerais”, “Novos Estudos” e “Perfis Sugeridos”. |
| RF10   | Exibir posts de Informações Gerais         | O sistema deve listar conteúdos educativos sobre doença celíaca, contaminação cruzada…          |
| RF11   | Exibir posts de Novos Estudos              | O sistema deve permitir visualizar artigos científicos e novas descobertas.                     |
| RF12   | Exibir Perfis Sugeridos                    | O sistema deve listar influenciadores, médicos e profissionais com links para suas redes sociais. |
| RF13   | Aba de dicas                               | O usuário deve poder visualizar conteúdo de dicas práticas (marmiteira elétrica, viagem segura etc.). |
| RF14   | Perfil do usuário                          | O sistema deve permitir ao usuário acessar sua página de perfil.                                |
| RF15   | Favoritar restaurantes                     | O usuário deve poder favoritar estabelecimentos.                                                |
| RF16   | Favoritar criadores/profissionais          | O usuário deve poder favoritar perfis sugeridos.                                               |
| RF17   | Salvar anotações pessoais                  | O usuário deve ter um espaço para escrever e salvar informações que achou úteis.                |
| RF18   | Login e cadastro                           | O usuário deve se cadastrar e autenticar via e-mail e senha.                                    |
| RF19   | Edição do perfil                           | O usuário deve poder editar suas informações pessoais.                                          |
| RF20   | Sistema de administração                   | Administradores do sistema podem editar informações, revisar posts e validar estabelecimentos.   |

# Requisitos Não Funcionais

| Código | Requisito Não Funcional | Descrição                                                                                     |
|--------|---------------------------|-------------------------------------------------------------------------------------------------|
| RNF01  | Usabilidade               | A interface deve ser simples, intuitiva e adequada para uso.                                   |
| RNF02  | Desempenho                | O app deve carregar conteúdo principal em no máximo 2 segundos em conexões comuns.             |
| RNF03  | Segurança                 | As senhas devem ser armazenadas criptografadas e o acesso deve ser via JWT.                    |
| RNF04  | Privacidade               | O sistema deve solicitar permissão explícita para usar geolocalização.                         |
| RNF05  | Disponibilidade           | A aplicação deve estar disponível 99% do tempo.                                                |
| RNF06  | Portabilidade             | O sistema deve funcionar em todos os navegadores modernos.                                     |
| RNF07  | Escalabilidade            | A arquitetura deve permitir crescimento do número de usuários e conteúdos sem perda de desempenho. |
| RNF08  | Manutenibilidade          | O código deve seguir boas práticas, padrões de projeto e ser documentado.                      |
| RNF09  | Confiabilidade            | O sistema deve lidar com falhas de APIs externas sem travar (tratamento de erros).             |
| RNF10  | Integridade de dados      | Todas as operações de CRUD devem garantir que informações sejam armazenadas de forma consistente. |
| RNF11  | Compatibilidade           | O backend deve interoperar corretamente com o frontend através de API REST padronizada.        |
| RNF12  | Responsividade            | Todo layout deve se adaptar a desktops.                                                        |
| RNF13  | Testabilidade             | Os módulos devem ser desenvolvidos de forma a permitir testes unitários e de integração.       |
| RNF14  | Observabilidade           | Devem existir logs para erros e eventos importantes.                                           |
| RNF15  | Deploy contínuo           | A esteira CI/CD deve permitir build automático, testes e deploy.                               |
| RNF16  | Armazenamento             | As imagens devem ser armazenadas em serviço externo (ex: AWS S3) para reduzir a carga do servidor. |
| RNF17  | API externa               | A integração com APIs (Google Places/ViaCEP) deve ter timeout e tratamento de exceções.        |
