import { useEffect, useState } from "react";

export function useApiRequest(asyncFunc) {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [refetch, setRefetch] = useState(false);

	const triggerRefetch = () => {
		setRefetch(!refetch);
	};

	useEffect(() => {
		setLoading(true);
		setData(null);
		setError(null);

		asyncFunction()
			.then((requestResponse) => {
				setLoading(false);
				setData(requestResponse.data);
			})
			.catch((requestError) => {
				setLoading(false);

				if (!requestError.response) {
					setError("NETWORK-ERROR");
				} else {
					setError(requestError.response);
				}
			});
	}, [refetch]);

	return [loading, data, error, triggerRefetch];
}
