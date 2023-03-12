import { ajax } from 'rxjs/ajax';
import { forkJoin } from "rxjs";
import { XMLHttpRequest } from 'xmlhttprequest'

function createXHR() {
    return new XMLHttpRequest();
}


let url1 = 'https://api.github.com/search/repositories?q=stars%3A%3E0&sort=stars&order=desc&page=1';
let url2 = 'https://gitlab.com/api/v4/projects/gitlab-org%2Fgitlab-foss';

forkJoin(
    {
      github: ajax({
          createXHR,
          url: url1,
          crossDomain: true,
          withCredentials: false,
          method: 'GET'
      }),
      gitlab: ajax({
          createXHR,
          url: url2,
          crossDomain: true,
          withCredentials: false,
          method: 'GET'
      })
    }
)
    .subscribe(console.log);