---
title: Criando uma animação de typewriter com React Hooks e styled-components
date: 2020-01-07
summary: Um mini tutorial de como criar uma animação simples e fofinha que eu inclusive uso aqui rs
tags: javascript
---

<p class="desktop-gif"><img alt="Qualquer tecnologia suficientemente avançada é indistinguível de magia, frase de Arthur C. Clarke" src="./typewriter-animation.gif" /></p>
<p class="mobile-gif"><img alt="Qualquer tecnologia suficientemente avançada é indistinguível de magia, frase de Arthur C. Clarke" src="./typewriter-animation-mobile.gif" /></p>

Esse GIF foi uma das primeiras animações que eu fiz, foi bem legal o processo de implementação. O resultado ficou replicável e relativamente elegante,   pelo menos a solução, rs. Então pensei "Por que não escrever sobre isso?" E aqui estamos.

Antes de tudo, e por pura curiosidade, a frase do GIF é a 3º lei de Clarke, e faz parte de uma série de premissas escritas por Arthur C. Clarke, o autor de 2001: Uma Odisséia no Espaço.

Mas vamos ao ponto...

##Do que vamos precisar

![styled-components+react](./styled-components-react.png)

Seria impossível explicar tudo nos mínimos detalhes, então vou colocar logo abaixo algumas referências bem pontuais.

  - Caso prefira uma solução apenas com CSS eu recomendo esse [post do css-tricks][0] sobre typewriter effect.

  - [Um guia completo para useEffect][1], pelo Dan Abramanov

  - E esse [artigo sobre animações básicas][2] com styled components e react


##TLDR

>Me dá o código pls — Qualquer dev lendo isso

Se bateu aquela preguiça é só dar uma olhada nesse [gihub gist][3] que o componente já ta pronto e é só usar ;)

---

##Implementação

Vamos começar pelo mais tranquilo, a estilização. Vamos precisar de dois elementos básicos, um container, e algo que imite o nosso cursor de texto, vulgo "treco que pisca".

Para o "treco que pisca" vamos usar a borda de um `<span />` e ficar oscilando a cor dela entre transparente e colorido em um loop, criando o efeito de "blink" do cursor. Felizmente, o CSS por padrão já têm isso 🎉 sob o adorável nome de keyframe.

```javascript{2,3}
const blinkTextCursor = keyframes`
  from {border-right-color: rgba(0, 0, 0, .75);}
  to {border-right-color: transparent}
`;

const TextCursor = styled.span`
  border-right: 2px solid rgba(0, 0, 0, .75);
  display: inline;
  animation: ${blinkTextCursor} 0.7s steps(44) infinite normal;
`;

const Container = styled.p`
  display: inline-block;
  margin: 0;
`;
```

Com nossos styled components em mãos, podemos nos preocupar apenas com a lógica agora, queremos usar algo desse tipo nas nossas aplicações:

```jsx{}
class App extends Component {
  render() {
    return (
      <TypeWriter value="Qualquer tecnologia suficientemente 
      avançada é indistinguível de magia" />
    );
  }
}
```

Então vamos criar nosso componente 💜.

```jsx{}
function TypeWriter({ value }) {
  const [text, setText] = useState('');

  const typeWriter = (text, i = 0) => {
    if (i < value.length) {
      setText(text.slice(0, i + 1));
      setTimeout(() => {
        typeWriter(text, i + 1);
      }, 100);
    }
  };

  useEffect(() => {
    typeWriter(value);
  }, []);

  return (
    <Container>
      {text}
      <TextCursor />
    </Container>
  );
}
```

>Legal, mas o que diabos isso faz? - Qualquer pessoa

Por alto, estamos abusando um pouco do ciclo de vida do React, forçando várias renderizações que vão escrevendo a frase, aquela que passamos para nosso componente pela prop `value`, letra por letra, assim como na digitação. E enquanto isso, nosso "treco que pisca" ta lá. Isso tudo junto e misturado cria a bela ilusão de que o texto está sendo escrito.

###A função que faz a mágica

A func `typeWriter` corta recursivamente a frase, char por char, e a cada chamada atualiza o valor da variável `text` que é renderizada no front. Nisso o DOM pensa "Hm, essa váriavel mudou de valor, melhor atualizar" e atualiza, agora com uma nova letra. Tentei deixar bem detalhado abaixo, da uma olhada:

```jsx{9}
// Começamos com 0
const typeWriter = (text, i = 0) => {

  // E garantimos que a condição de parada seja "acabou a frase"
  if (i < value.length) {

    /* Cortamos nossa frase, e atualizamos nosso estado
    com o novo valor, que agora tem mais uma letra */
    setText(text.slice(0, i + 1));

    /* Agora é só chamar a função de novo, incrementando
    nossa variável de "corte" e colocando um tempo
    de 100ms para a execução, afinal ninguém
    digita absurdamente rápido né */
    setTimeout(() => {
      typeWriter(text, i + 1);
    }, 100);
  }
};
```

##Conclusão

[0]: https://css-tricks.com/snippets/css/typewriter-effect/
[1]: https://overreacted.io/pt-br/a-complete-guide-to-useeffect/
[2]: https://codeburst.io/animating-react-components-with-css-and-styled-components-cc5a0585f105
[3]: https://gist.github.com/luizmariz/0478d3561bcd91dd885376625aead768