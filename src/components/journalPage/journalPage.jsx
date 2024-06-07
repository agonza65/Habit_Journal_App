import { Header } from "../header/header";
import { JournalListView } from "../journalListView/journalListView";

// Journal component
export const JournalPage = () => {
	return <div>	
		<header>Journal List</header>
		<table>
			<thead>
				<tr>
					<th>Journals</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>	
				
				<tr>
					<td>Mon. February 23, 2024</td>
				</tr>
				<tr>
					<td>Tues. February 24, 2024</td>
				</tr>
				<tr>
					<td>Wed. February 25, 2024</td>
				</tr>
				 {/* <tr>
					<td>
					 	<Button> Edit </Button>
						 <Button> Add </Button>
					</td>
				</tr> */}
			</tbody>
		</table>
	</div>;
};