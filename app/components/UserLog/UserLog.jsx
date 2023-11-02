import React from 'react';
import Stack from '../ui/Stack/Stack';
import UserLogItem from './UserLogItem';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { DislikeSvg, FavoriteHeartSvgEmpty, LikeSvg } from '@public/assets/svg';

const UserLog = ({ ...props }) => {
	const { logs } = useAppSelector((state) => state.userLog);
	const userLogClasses = `
		${props.className || ''}
  `

	return (
		<div className={userLogClasses} {...props}>
			<Stack gap={10} className="!flex-col-reverse">
				{logs.map((log) => (
					<UserLogItem
						time={log.createdAt}
						imageId={log.imageId}
						text={log.message}
						key={log.id}
						icon={
							<>
								{log.value === "favourite" && (
									<FavoriteHeartSvgEmpty className="fill-primary" />
								)}
								{log.value === "like" && (
									<LikeSvg className="fill-success" />
								)}
								{log.value === "dislike" && (
									<DislikeSvg className="fill-warning" />
								)}
							</>
						}
					/>
				))}
			</Stack>
		</div>
	);
};

export default UserLog;
