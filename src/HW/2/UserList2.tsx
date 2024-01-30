import {CurrentUser} from './CurrentUser';
import {UsersObjectType, UserType} from './HW2';

type UserList2PropsType = {
	users: UsersObjectType
	filterUsers: () => void
};

export const UserList2 = (props: UserList2PropsType) => {


	const sayHello = () => {
		console.log('Hello!');
	}
	return (
		<div id={'hw02-users'}>
			<h2>User List:</h2>
			<button onClick={sayHello}>dfsdgd</button>
			<button id={'hw02-filter-button'} onClick={props.filterUsers}>SHOW ME FRIENDS FROM LA</button>
			<ul>
			{props.users.myFriends.map((user: UserType) => (
				<CurrentUser key={user.id} user={user} />
			  ))}
			</ul>
		</div>
	);
};