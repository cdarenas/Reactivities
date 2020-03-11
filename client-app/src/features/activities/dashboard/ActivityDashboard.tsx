import React from 'react'
import { Grid, GridColumn, List } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'
import ActivityList from './ActivityList'
import ActivityDetails from '../details/ActivityDetails'

interface IProps {
    activities: IActivity[]
}

const ActivityDashboard: React.FC<IProps> = ({ activities }) => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityList activities={activities}></ActivityList>
            </Grid.Column>
            <Grid.Column width={6}>
                <ActivityDetails></ActivityDetails>
            </Grid.Column>
        </Grid>
    )
}

export default ActivityDashboard