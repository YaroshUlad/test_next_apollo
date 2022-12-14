import {ReactNode, useEffect, useState} from 'react';

type ClientOnlyProps = {
	children: ReactNode
}

export default function ClientOnly({children, ...delegated}: ClientOnlyProps) {
/*
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	if ( !hasMounted) {
		return <>o</>;
	}
*/

	return <div {...delegated}>{children}</div>;
}