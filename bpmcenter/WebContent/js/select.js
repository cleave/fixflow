/**
 * 所有HTML选人界面的控制层
 * @param type 选择界面类型
 * @param isMulti 是否多选
 * @returns 选择的List<Map>
 */
function FixSelect(obj){
	//var that = arguments[arguments.length-1];
	var rv = null;
	switch(obj.type){
		case "user":
			rv = window.showModalDialog("FlowCenter?action=selectUserList&isMulti="+obj.isMulti);
			break;
		case "node":
			rv = window.showModalDialog("FlowCenter?action=selectNodeList&taskId="+obj.taskId);
			break;
		case "step":
			rv = window.showModalDialog("FlowCenter?action=selectStepList&taskId="+obj.taskId);
			break;
		default:
			break;
			
	}
	return rv;
};