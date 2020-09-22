<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IdentityController extends Controller
{
    //
    public function __invoke()
    {
        return response(auth()->user());
    }
}
