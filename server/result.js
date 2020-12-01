const success_code = 0;
const error_code = -1;

/**
 * 接口返回对象
 */
class Result {
  /**
   * 新建Result对象
   * @param {any} data
   * @param {Number} code
   * @param {String} msg
   */
  constructor(data, code, msg) {
    this.code = code ? code : 0;
    this.data = data;
    this.msg = msg;
  }
  /**
   * 成功
   * @param {any} data
   */
  static success(data) {
    return new Result(data, success_code, "成功");
  }
  /**
   * 失败
   * @param {错误信息} msg
   */
  static error(msg) {
    return new Result(null, error_code, msg);
  }
}

module.exports = Result;
