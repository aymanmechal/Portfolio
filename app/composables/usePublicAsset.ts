import { joinURL } from 'ufo'

/** Préfixe un fichier de public/ avec app.baseURL (ex. /Portfolio/ sur GitHub Pages). */
export const usePublicAsset = () => {
  const baseURL = useRuntimeConfig().app.baseURL
  return (path: string) => joinURL(baseURL, path)
}
