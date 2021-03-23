import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";
import {useQuery} from '../../helpers/getQuery';

const ResetRedirect = () => {
  let query = useQuery();
  let history = useHistory();

  useEffect(() => {
    history.push(`/reset-password/${query.get("user")}`)
  }, []);

  return (
    <div>Reset redirect</div>
  )
}

export default ResetRedirect;