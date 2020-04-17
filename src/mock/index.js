import Mock from 'mockjs'
import {seller,goods,ratings} from './data.json'
Mock.mock('/api/seller',{code:0,data:seller})
Mock.mock('/api/goods',{code:0,data:goods})
Mock.mock('/api/ratings',{code:0,data:ratings})