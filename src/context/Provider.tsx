import FilmContext from "./FilmContext";

type ProviderProps = {
  children: React.ReactNode
} 

function Provider({ children }: ProviderProps) {
  const INITIAL_VALUES = {}

  return(
    <FilmContext value={ INITIAL_VALUES }>
      { children }
    </FilmContext>
  );
}

export default Provider;