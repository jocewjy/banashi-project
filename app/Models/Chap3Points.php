<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chap3Points extends Model
{
    use HasFactory;

    protected $table = 'users';

    protected $fillable = ['points_ch3'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
