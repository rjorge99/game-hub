import { useEffect, useState } from 'react';
import axios from 'axios';

import apiClient from '../services/apiClient';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b4daab98ef6a4798bbb5607987c981ad'
    }
});
