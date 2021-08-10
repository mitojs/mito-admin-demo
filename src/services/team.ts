import { GlobalProjectList } from '@/d.ts/project'
import request from '@/services/request'
export const getTeamList = () => request.get<null, GlobalProjectList.Response[]>('/team/list')
