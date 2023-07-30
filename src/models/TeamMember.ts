namespace TeamMember {

    export class JoinTeamDto {
        avatar: string = ''
        bio: string = ''
        firstName: string = ''
        lastName: string = ''
        title: string = ''

        get fullName() {
            return `${this.firstName} ${this.lastName}`
        }

    }
}

export default TeamMember
