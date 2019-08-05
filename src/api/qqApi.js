import { getJSON } from "./fetch";

const MUSIC_LIST = 'http://118.24.41.230:8085/'
export function getList() {
    return getJSON(MUSIC_LIST,null)
}