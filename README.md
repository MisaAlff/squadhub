# SquadHub

Aplicativo mobile para gerenciamento e estatísticas de times de futebol amador, construído com **Expo** e **React Native**.

## Stack

| Tecnologia | Uso |
|------------|-----|
| [Expo SDK 54](https://docs.expo.dev/versions/v54.0.0/) | Plataforma e tooling |
| TypeScript | Tipagem estática |
| [React Navigation v7](https://reactnavigation.org/) | Navegação (Auth Stack + Bottom Tabs) |
| [TanStack Query](https://tanstack.com/query) | Data fetching e cache |
| [Zustand](https://zustand.docs.pmnd.rs/) | Estado global (autenticação) |
| [NativeWind v4](https://www.nativewind.dev/) | Estilização com Tailwind CSS |
| [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) | Formulários e validação |

## Pré-requisitos

- Node.js 20+
- npm
- [Expo Go](https://expo.dev/go) (dispositivo físico) ou emulador Android/iOS

## Instalação

```bash
git clone <url-do-repositorio>
cd squadhub
npm install
```

## Executando

```bash
# Iniciar o servidor de desenvolvimento
npm start

# Abrir no Android
npm run android

# Abrir no iOS (macOS)
npm run ios
```

Após alterações em `babel.config.js`, `metro.config.js` ou `tailwind.config.js`, limpe o cache:

```bash
npx expo start -c
```

## Estrutura do projeto

```txt
src/
├── App.tsx                 # Componente raiz
├── providers.tsx           # QueryClient, SafeArea, GestureHandler
├── components/             # Componentes reutilizáveis
├── screens/                # Telas da aplicação
├── navigation/             # Auth Stack, App Tabs, Root Navigator
├── hooks/                  # Hooks TanStack Query
├── services/               # Camada de acesso a dados
├── store/                  # Stores Zustand
├── mocks/                  # Dados mockados (Pelada FC)
├── types/                  # Tipagens TypeScript
├── constants/              # Query keys, tema
├── utils/                  # Utilitários (cn, etc.)
└── assets/                 # Assets internos do app
```

## Navegação

O fluxo é controlado pelo estado de autenticação (`useAuthStore`):

- **Não autenticado** → `AuthStack` → `LoginScreen`
- **Autenticado** → `AppTabs` com 5 abas:

| Aba | Tela |
|-----|------|
| Dashboard | Visão geral do time |
| Jogos | Histórico e próximos jogos |
| Jogadores | Elenco e estatísticas |
| Rankings | Artilheiros, assistências, MVPs |
| Perfil | Dados do usuário e logout |

## Autenticação (mock)

A autenticação ainda é simulada. Na tela de login, preencha e-mail e senha válidos (validados pelo Zod) e toque em **Entrar** — o store Zustand define um usuário mock e navega para as tabs.

## Data fetching

Hooks preparados em `src/hooks/` consomem services que retornam mocks de `src/mocks/`. As telas ainda não utilizam esses hooks; a estrutura está pronta para integração futura com API real.

```ts
// Exemplo de uso futuro
const { data, isLoading } = usePlayers();
```

## Componentes base

| Componente | Descrição |
|------------|-----------|
| `StatCard` | Card de estatística com variantes de cor |
| `SectionHeader` | Título de seção com ação opcional |
| `LoadingSkeleton` | Placeholder animado (sem loading textual) |
| `EmptyState` | Estado vazio com ícone, título e ação |
| `Avatar` | Avatar com imagem ou iniciais |

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm start` | Inicia o Expo Dev Server |
| `npm run android` | Abre no Android |
| `npm run ios` | Abre no iOS |
| `npx tsc --noEmit` | Verifica tipagem TypeScript |

## Alias de importação

Imports usam o alias `@/` apontando para `src/`:

```ts
import { useAuthStore } from '@/store/authStore';
import { StatCard } from '@/components/StatCard';
```

## Solução de problemas

### `Cannot find module 'babel-preset-expo'`

Instale o preset compatível com o SDK:

```bash
npx expo install babel-preset-expo
```

### `Cannot read property 'makeMutable' of undefined`

Esse erro vem do **Reanimated 4** (usado pelo NativeWind em classes como `animate-pulse`). Correções aplicadas no projeto:

1. Instalar worklets compatível com Expo 54:

```bash
npx expo install react-native-worklets
```

2. **Não** declarar o plugin do Reanimated manualmente em `babel.config.js` — o `babel-preset-expo` adiciona `react-native-worklets/plugin` automaticamente.

3. Garantir o import no entry point (`index.ts`):

```ts
import 'react-native-reanimated';
```

4. Reiniciar com cache limpo:

```bash
npx expo start -c
```

### Estilos NativeWind não aplicam

1. Confirme que `global.css` está importado em `src/App.tsx`
2. Reinicie com cache limpo: `npx expo start -c`

## Licença

Projeto privado.
