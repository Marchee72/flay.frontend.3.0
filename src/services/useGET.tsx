import axios from "axios";
import { useState } from "react";
import API from "./ApiConfig";

export default function useGET<T>(url: string): { data: T | null, loading: boolean, error: Error | null, fetch: () => void } {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error | null>(null)
    url = API.API_URL + API.login
    const fetch = () => {
        setLoading(true)
        axios.get<null, T>(url)
            .then((response) => { setData(response) })
            .catch((err) => setError(err))
            .finally(() => setLoading(false))
    }
    return { data, loading, error, fetch }

}