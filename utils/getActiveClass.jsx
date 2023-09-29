'use client'

import { useRouter } from "next/navigation";

const getActiveClass = (classToAdd, link) => {
	const router = useRouter();
	const currentRoute = router.pathname;

	if (currentRoute === link) {
		return `${classToAdd}`;
	}
};

export default getActiveClass;

// const currentPath = usePathname();

  //const isActive = (path) => {
 //   return currentPath === path;
  //};